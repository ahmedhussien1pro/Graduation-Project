import CompleteQuestion from "../../../Components/CompleteQuestion/CompleteQuestion";
import Data from "./second_Data.json";
import "./Bash_quiz.css";
import ThemeSwitcher from "../../../Components/ThemeSwitcher/ThemeSwitcher";

export default function Second_Lab() {
  return (
    <>
    <ThemeSwitcher/>
      <CompleteQuestion questionsData={Data} />
    </>
  );
}
