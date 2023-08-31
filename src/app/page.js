"use client";
import React, { useState } from "react";

export default function Home() {
  const [toggle, settoggle] = useState(null);
  const toggled = (i) => {
    if (toggle === i) {
      return settoggle(null);
    }
    settoggle(i);
  };
  const qa = [
    {
      question: "What is Aspirify and how can it help me in my career?",
      answer:
        " Aspirify is your personalized career companion. We provide tailored guidance, resources, and insights to help you make informed career decisions, explore new opportunities, and ultimately, achieve your professional goals.",
    },
    {
      question: " How does Aspirify match me with the right career path?",
      answer:
        " We begin by conducting a personalized quiz that assesses your skills, interests, and aspirations. Using this data, we provide you with career recommendations that align with your unique profile, helping you identify the roles that suit you best.",
    },
    {
      question: "Can Aspirify help me with career planning and goal-setting?",
      answer:
        "Absolutely! We offer a comprehensive roadmap that outlines the steps you need to take to reach your career goals. Our planning tools assist you in setting achievable milestones and tracking your progress.",
    },
    {
      question:
        "Is there a support team available if I have questions or encounter issues?",
      answer:
        "Yes, we have a dedicated support team ready to assist you. Feel free to reach out via our inapp chat or email, and we'll be happy to help you with any questions or concerns.",
    },
  ];
  return (
    <div>
      <div className="intro mt-[8vh] flex justify-between items-center mb-[9.5vh] min-w-960px ">
        <div className="left w-[50%] flex flex-col pl-[3rem] items-end">
          <div className="content">
            <div className="qoute-1 text-[1.8rem] text-justify mb-[1rem] min-w-[367px] font-medium">
              Step into Your Future with Aspirify, Your Ultimate Career
              Companion.
            </div>
            <div className="qoute-2 text-[1.2rem] text-justify min-w-[367px]">
              Welcome to Aspirify, your personalized career compass. We're here
              to help you navigate your professional journey, discover your
              passions, and achieve your career aspirations with confidence.
              Let's embark on this path to success together.
            </div>
            <div className="getstarted mt-[1.2rem]">
              <button className="startbutton w-[8rem] h-[2.5rem] text-[1.1rem] text-white bg-black border-0  ">
                Get started
              </button>
            </div>
          </div>
        </div>
        <div className="right ">
          <img
            src="/landing.jpg"
            className="landing-image min-h-[600px] min-w-[550px] w-[60vw] h-[70vh] object-scale-down"
          ></img>
        </div>
      </div>
      <div className="feature flex mt-[3vh] justify-around mb-[4vh] min-w-[960px]">
        <div className="feature-1 p-[1rem] flex flex-col items-center w-[30%]">
          <img
            src="/path.jpg"
            className="feature-img object-cover w-[25vw] h-[45vh] min-w-[290px] min-h-[300px] border-[1px] border-solid border-black 2xl:h-[40vh] xl:h-[34vh]"
          ></img>
          <div className="feature-def text-[1.2rem] text-justify w-[75%] mt-[1.5rem]">
            Your goals are the destination, our roadmap is the route to get you
            there.
          </div>
        </div>
        <div className="feature-1 p-[1rem] flex flex-col items-center w-[30%]">
          <img
            src="quiz.jpg"
            className="feature-img object-cover w-[25vw] h-[45vh] min-w-[290px] min-h-[300px] border-[1px] border-solid border-black"
          ></img>
          <div className="feature-def text-[1.2rem] text-justify w-[75%] mt-[1.5rem]">
            Discover your perfect role, one question at a time.
          </div>
        </div>
        <div className="feature-1 p-[1rem] flex flex-col items-center w-[30%]">
          <img
            src="/scope.jpg"
            className="feature-img object-cover w-[25vw] h-[45vh] min-w-[290px] min-h-[300px] border-[1px] border-solid border-black"
          ></img>
          <div className="feature-def text-[1.2rem] text-justify w-[75%] mt-[1.5rem]">
            Empowering your journey with all the knowledge you need to turn
            goals into achievements.
          </div>
        </div>
      </div>
      <div className="qa flex flex-col items-center mt-[8vh] mb-[7vh] w-[960px] ml-auto mr-auto">
        <div className="heading text-[1.7rem] mb-[1.2rem] text-[#c03300]">
          F A Q' s
        </div>
        <div className="subheading text-[3rem] mb-[6vh]">
          Frequently Asked Question
        </div>
        <div className="answers">
          {qa.map((data, i) => {
            return (
              <div className="section-1 flex flex-col items-center text-justify cursor-pointer min-w-[960px]">
                <div
                  className="question flex w-[50vw] justify-between text-[1.5rem] pt-[1.5rem] pb-[1.5rem] min-w-[700px]"
                  onClick={() => {
                    toggled(i);
                  }}
                >
                  <div className="ques font-medium">{data.question} </div>
                  <div className="symbol ml-[4rem]">
                    {toggle === i ? "-" : "+"}
                  </div>
                </div>
                <div
                  className={
                    toggle === i
                      ? "min-w-[700px] w-[50vw] text-[1.3rem] "
                      : "max-h-0 overflow-hidden"
                  }
                >
                  {data.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="formtitle 5vh text-[2.65rem] flex justify-center">
        Contact us
      </div>
      <div className="contact ml-[5vw] mr-[5vw] flex items-center justify-center mb-[3rem]">
        <div className="con-img">
          <img
            src="/contactus.jpg"
            className="sen-img w-[40vw] min-w-[450px] min-h-[300px] "
          ></img>
        </div>
        <form className="form w-[40%] flex flex-col items-center ml-[2rem]">
          <div>
            <input
              placeholder="Full Name"
              className="msg outline-none border-t-none border-l-none border-r-none border-b-2 border-black text-black text-[1.7rem] mt-[2rem] w-[20vw] min-w-[300px] pt-[0.5vh] pr-[1vw] pb-[1vh] pl-[0vw]"
              type="text"
            ></input>
          </div>
          <div>
            <input
              placeholder="E-mail"
              className="msg outline-none border-t-none border-l-none border-r-none border-b-2 border-black text-black text-[1.7rem] mt-[2rem] w-[20vw] min-w-[300px] pt-[0.5vh] pr-[1vw] pb-[1vh] pl-[0vw]"
              type="email"
            ></input>
          </div>
          <div>
            <input
              placeholder="Message"
              className="msg outline-none border-t-none border-l-none border-r-none border-b-2 border-black text-black text-[1.7rem] mt-[2rem] w-[20vw] min-w-[300px] pt-[0.5vh] pr-[1vw] pb-[1vh] pl-[0vw]"
            ></input>
          </div>
          <button
            type="submit"
            className="subuton w-[8.5rem] h-[2.2rem] bg-black text-[1.2] align-middle mt-[4vh] border-none text-white"
          >
            Send
          </button>
        </form>
      </div>
      <div className="sep w-[97.5%] ml-auto mr-auto">
        <hr className="hrr h-[2.5px] bg-black"></hr>
      </div>
      <footer className="foot flex justify-between ml-[4rem] mr-[4rem] mt-[1rem] mb-[0.3rem]">
        <div className="footleft">
          <div className="foot-title text-[4rem] align-middle">Aspirify</div>
          <div className="foot-subtitle text-[1.4rem]">Career Compass</div>
        </div>
        <div className="footright flex gap-x-[2rem] items-center">
          <div className="foot-services justify-center flex flex-col gap-x-[1.5rem] gap-y-[1rem] mb-[1rem]">
            <div className="head-serv font-medium text-[1.2rem]">Help</div>
            <div className="serv">Quiz</div>
            <div className="serv">Roadmap</div>
            <div className="serv">Degree</div>
          </div>
          <div className="foot-services justify-center flex flex-col gap-x-[1.5rem] gap-y-[1rem] mb-[1rem]">
            <div className="head-serv font-medium text-[1.2rem]">
              Legal Info
            </div>
            <div className="serv">Privacy policy</div>
            <div className="serv">Terms & Conditions</div>
            <div className="serv">Cookie Policy</div>
          </div>
          <div className="foot-services justify-center flex flex-col gap-x-[1.5rem] gap-y-[1rem] mb-[1rem]">
            <div className="head-serv font-medium text-[1.2rem]">Follow Us</div>
            <div className="serv">Instagram</div>
            <div className="serv">Twitter</div>
            <div className="serv">Github</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
