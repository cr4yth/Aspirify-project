"use client";
import React from "react";
import { useRouter } from "next/navigation";
//#385b64 green
//#ff745c orange
//#1a2e35 dark
const services = () => {
  const route = useRouter();
  return (
    <div className=" w-[98vw] flex flex-col h-[84vh] items-center mt-[1rem] mr-auto ml-auto mb-[0.5rem] min-w-[1050px] bg-[#1a2e35] rounded-xl gradeint">
      <div className="flex flex-row  w-[70rem] justify-between mt-[12vh]">
        <div className="w-[18rem] h-[24rem] bg-white border-[1px]  flex flex-col rounded-xl border-black text-black hover:scale-[1.2] duration-[150] transition-all">
          <div className="text-[2.2rem] mt-[2rem] flex justify-center font-light ">
            Roadmap
          </div>
          <hr className="bg-black w-[70%] mr-auto ml-auto h-[1px] border-t-black mt-[1rem] "></hr>
          <div className="w-[15rem] text-justify ml-auto mr-auto mt-[2rem] flex-grow ">
            Navigate Your Career Journey with our Roadmap Section, Unlock a
            clear path to success and make informed decisions about your future
            career.
          </div>
          <button
            className="w-[70%] h-[10%] text-[1rem] ml-auto mr-auto mb-[4rem] text-white bg-black"
            onClick={() => {
              route.push("/roadmap");
            }}
          >
            Explore Roadmap
          </button>
        </div>
        <div className="w-[18rem] h-[24rem] bg-white mt-[4.5rem] border-[1px] border-black flex flex-col rounded-xl hover:scale-[1.2] duration-[150] transition-all text-black">
          <div className="text-[2.2rem] mt-[2rem] flex justify-center font-light text-[black]">
            Quiz
          </div>
          <hr className="bg-black w-[70%] mr-auto ml-auto h-[1px] border-t-black mt-[1rem]"></hr>
          <div className="w-[15rem] text-justify ml-auto mr-auto mt-[2rem] flex-grow">
            Take our Quiz Powered by Machine Learning! Discover your ideal
            career with our innovative career guidance application.
          </div>
          <button
            className="w-[70%] h-[10%] text-[1rem] ml-auto mr-auto mb-[4rem] bg-black text-white"
            onClick={() => {
              route.push("/quiz");
            }}
          >
            Take Quiz
          </button>
        </div>
        <div className="w-[18rem] h-[24rem] bg-white border-[1px] border-black flex flex-col rounded-xl translate-all hover:scale-[1.2] duration-150">
          <div className="text-[2.2rem] mt-[2rem] flex justify-center font-light text-[black]">
            Degree
          </div>
          <hr className="bg-black w-[70%] mr-auto ml-auto h-[1px] border-t-black mt-[1rem]"></hr>
          <div className="w-[15rem] text-justify ml-auto mr-auto mt-[2rem] flex-grow">
            Dive into a world of academic possibilities as you discover a wide
            range of degrees and educational paths tailored to your career
            aspirations.
          </div>
          <button
            className="w-[70%] h-[10%] text-[1rem] ml-auto mr-auto mb-[4rem] bg-black text-white"
            onClick={() => {
              route.push("/degree");
            }}
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default services;
