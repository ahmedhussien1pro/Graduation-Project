import React from "react";
import Header from "../../Header/Header";
import mcqData from "./MCQCards";
import Footer from "../../Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import { Card } from "../../Components/Card/Card";
import Go2TopBtn from "../../Components/Go2Top_Btn/Go2Top_Btn";
import LandingPractice from "../../Components/PracticeLanding/PracticeLanding";
import PracticeTitle from "../../Components/PracticeTitle/PracticeTitle";
import ThemeSwitcher from "../../Components/ThemeSwitcher/ThemeSwitcher";
export default function Regex_labs() {
  
  return (
    <>
      <Banner />
      <Header />
      <ThemeSwitcher />
      <LandingPractice />
      <div className="course">
        <div className="container">
          <PracticeTitle title={"Careers in Cyber"} />
          <div className="row">
            {mcqData.map((mcq, id) => (
              <Card
                title={mcq.title}
                brief={mcq.description}
                difficulty={mcq.difficulty}
                image={mcq.image}
                link={mcq.link}
                key={mcq.id}
              />
            ))}
          </div>
        </div>
      </div>
      <Go2TopBtn />
      <Footer />
    </>
  );
}
