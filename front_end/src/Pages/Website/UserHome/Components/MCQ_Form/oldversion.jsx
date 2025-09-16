import React, { useState, useEffect, useRef, useCallback } from "react";
import useSound from "use-sound";
import Swal from "sweetalert2";
import "./MCQ.css";

// Import your local sound files
import downSound from "./sound-effects/down.mp3";
import correctSound from "./sound-effects/correct-ans.mp3";
import wrongSound from "./sound-effects/wrong-ans.mp3";
import passedSound from "./sound-effects/quiz-passed.mp3";
import failedSound from "./sound-effects/quiz-failed.mp3";

// Function to show initial quiz rules using SweetAlert2
const ShowInitialAlert = (onStart) => {
  return Swal.fire({
    title: "Rules of this Quiz",
    html: `
      <ul style="text-align:left;">
        <li>You have <strong>30 seconds</strong> per question.</li>
        <li>Once you choose an answer, it cannot be changed.</li>
        <li>If time runs out, the correct answer will be auto‑selected.</li>
        <li>You cannot exit the quiz while playing.</li>
        <li>Earn points for correct answers!</li>
      </ul>
    `,
    icon: "info",
    showCancelButton: true,
    confirmButtonText: "Start Quiz",
    cancelButtonText: "Go Back",
    allowOutsideClick: false,
    allowEscapeKey: false,
  }).then((result) => {
    if (result.isConfirmed) {
      onStart();
    } else {
      window.history.back();
    }
  });
};

const MCQQuiz = ({ questionsData }) => {
  const questions = questionsData.questions;
  const totalQuestions = questions.length;

  // Quiz state
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  // Timers: internalTimer (30 sec for auto‑select) and displayTimer (20 sec for UI)
  const [internalTimer, setInternalTimer] = useState(30);
  const [displayTimer, setDisplayTimer] = useState(null);

  const internalIntervalRef = useRef(null);
  const displayIntervalRef = useRef(null);
  const displayTimeoutRef = useRef(null);
  const currentQuestion = questions[currentQuestionIndex];
  const soundVolume = 0.5;

  // Sound hooks
  const [playDown, { stop: stopDown }] = useSound(downSound, {
    volume: soundVolume,
  });
  const [playCorrect] = useSound(correctSound, { volume: soundVolume });
  const [playWrong] = useSound(wrongSound, { volume: soundVolume });
  const [playPassed] = useSound(passedSound, { volume: soundVolume });
  const [playFailed] = useSound(failedSound, { volume: soundVolume });

  // Start timers for the current question
  const startTimers = useCallback(() => {
    // Reset timer values
    setInternalTimer(30);
    setDisplayTimer(null);

    // Clear any previous timers
    if (internalIntervalRef.current) {
      clearInterval(internalIntervalRef.current);
      internalIntervalRef.current = null;
    }
    if (displayIntervalRef.current) {
      clearInterval(displayIntervalRef.current);
      displayIntervalRef.current = null;
    }
    if (displayTimeoutRef.current) {
      clearTimeout(displayTimeoutRef.current);
      displayTimeoutRef.current = null;
    }

    // Start the internal timer immediately
    internalIntervalRef.current = setInterval(() => {
      setInternalTimer((prev) => prev - 1);
    }, 1000);

    playDown();

    // After 3 seconds, start the display timer for the user
    displayTimeoutRef.current = setTimeout(() => {
      setDisplayTimer(20);
      displayIntervalRef.current = setInterval(() => {
        setDisplayTimer((prev) => {
          if (prev <= 1) {
            clearInterval(displayIntervalRef.current);
            displayIntervalRef.current = null;
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }, 3000);
  }, [playDown]);

  // Stop all timers and sound
  const stopTimers = useCallback(() => {
    if (internalIntervalRef.current) {
      clearInterval(internalIntervalRef.current);
      internalIntervalRef.current = null;
    }
    if (displayIntervalRef.current) {
      clearInterval(displayIntervalRef.current);
      displayIntervalRef.current = null;
    }
    if (displayTimeoutRef.current) {
      clearTimeout(displayTimeoutRef.current);
      displayTimeoutRef.current = null;
    }
    stopDown();
  }, [stopDown]);

  // Start timers when quiz starts or when moving to a new question (if answer is not yet shown)
  useEffect(() => {
    if (quizStarted && !showAnswer) {
      startTimers();
    }
    // Stop timers on cleanup to avoid stray callbacks
    return () => stopTimers();
  }, [quizStarted, currentQuestionIndex, showAnswer, startTimers, stopTimers]);

  // Auto-select answer when internal timer runs out
  useEffect(() => {
    if (!quizStarted) return;
    if (internalTimer <= 0 && !showAnswer) {
      // Auto-select the correct answer for the current question
      setSelectedOption(currentQuestion.answer);
      setShowAnswer(true);
      playWrong();

      const newAnswers = [...userAnswers];
      newAnswers[currentQuestionIndex] = currentQuestion.answer;
      setUserAnswers(newAnswers);

      stopTimers();
    }
  }, [
    internalTimer,
    quizStarted,
    showAnswer,
    currentQuestionIndex,
    currentQuestion.answer,
    userAnswers,
    playWrong,
    stopTimers,
  ]);

  // Handle user option selection
  const handleOptionSelect = (option) => {
    if (showAnswer) return;
    setSelectedOption(option);
    setShowAnswer(true);
    stopTimers();

    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = option;
    setUserAnswers(newAnswers);

    if (option === currentQuestion.answer) {
      setScore((prev) => prev + 1);
      playCorrect();
    } else {
      playWrong();
    }
  };

  // Navigation: Next and Previous
  const handleNext = () => {
    // Stop timers before moving to next question
    stopTimers();
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption("");
      setShowAnswer(false);
    }
  };

  const handlePrevious = () => {
    stopTimers();
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setSelectedOption("");
      setShowAnswer(false);
    }
  };

  // On submit, stop timers and show final feedback via SweetAlert2
  const handleSubmit = () => {
    stopTimers();
    const finalScore = score;
    if (finalScore >= 15) {
      playPassed();
      Swal.fire({
        title: "Congratulations!",
        text: `Your level is fair! Final score: ${finalScore}`,
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      playFailed();
      Swal.fire({
        title: "Try again!",
        text: `You failed. Final score: ${finalScore}.\n\nPlease try again.`,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  // Welcome screen before the quiz starts
  if (!quizStarted) {
    return (
      <div className="quiz-body">
        <div className="quiz-container welcome">
          <h2>Welcome to the Quiz!</h2>
          <button
            className="mcq-btn start-btn"
            onClick={() => {
              ShowInitialAlert(() => setQuizStarted(true));
            }}
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-body">
      <div className="quiz-container">
        {/* Timer Display */}
        <div className="timer-display">
          <p>
            Time Remaining:{" "}
            {displayTimer !== null ? displayTimer : "20 (waiting...)"} sec
          </p>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
            }}
          ></div>
        </div>
        <div className="progress-text">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </div>

        {/* Question and Options */}
        <div className="question-container">
          <h2 className="question">{currentQuestion.question}</h2>
          <div className="options">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${
                  showAnswer && option === currentQuestion.answer
                    ? "correct"
                    : ""
                } ${
                  showAnswer &&
                  selectedOption === option &&
                  option !== currentQuestion.answer
                    ? "incorrect"
                    : ""
                }`}
                onClick={() => handleOptionSelect(option)}
                disabled={showAnswer}
              >
                {option}
              </button>
            ))}
          </div>
          {showAnswer && (
            <p className="feedback">
              {selectedOption === currentQuestion.answer
                ? "Correct!"
                : "Wrong!"}
            </p>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="navigation-buttons">
          <button
            className="mcq-btn nav-btn"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          {currentQuestionIndex === totalQuestions - 1 ? (
            <button className="mcq-btn nav-btn submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          ) : (
            <button
              className="mcq-btn nav-btn"
              onClick={handleNext}
              disabled={!showAnswer}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MCQQuiz;
