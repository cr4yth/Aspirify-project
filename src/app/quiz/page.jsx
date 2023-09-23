"use client";
import React from "react";
import { useState } from "react";
import ques from "../jsons/ques.json";

const Quiz = () => {
  const que = ques.questions;
  const [qno, setqno] = useState(0);
  const answers = ques.answers;
  const [topping, settopping] = useState("");
  const next = () => {
    if (qno < 16) {
      setqno(qno + 1);
    }
  };
  const prev = () => {
    if (qno > 0) {
      setqno(qno - 1);
    }
  };
  return (
    <div className="king flex flex-col justify-center items-center w-[81vw] h-[80vh] ml-auto mr-auto">
      <div className="flex shadow-[5px_5px_rgba(218,58,0,0.5),5px_5px_rgba(218,58,0,0.4),10px_10px_rgba(218,58,0,0.3),15px_15px_rgba(218,58,0,0.2),20px_20px_rgba(218,58,0,0.1),25px_25px_rgba(218,58,0,0.05)]">
        <div>
          <img
            className="quiz-img w-[35vw] h-[80vh] object-cover"
            src="./qui.webp"
          ></img>
        </div>
        <div className="flex flex-col bg-white pt-[2rem] pb-[2rem]">
          <div className="text-[1.35rem]">
            Question{" "}
            <span className="text-[1.35rem] text-[#da3a00]">{qno + 1}</span>
            <span className="text-[1.05rem]">/17</span>
          </div>
          <div className="question w-[40vw] text-[1.8rem] text-balance mb-[1rem] mt-[0.5rem]">
            {que[qno].question}
          </div>
          <div className="answer flex flex-col mt-[1rem]">
            {answers?.map((dat) => {
              return (
                <div className="border-solid border-[1px] border-[#da3a00] p-[6px] mb-[20px] w-[18.6rem] transition-all duration-200 hover:scale-[1.08] shadow-[3.5px_3.5px_rgba(218,58,0,0.85)]">
                  <label className="text-[1.4rem] flex" for={dat.ans}>
                    <input
                      type="radio"
                      value={dat.id}
                      id={dat.ans}
                      name="topping"
                      checked={topping === dat.id}
                      onChange={(e) => {
                        settopping(e.target.value);
                      }}
                      className="accent-[#da3a00]"
                    />
                    <div className="pl-[8px] text-[#da3a00] font-[300]">
                      {dat.ans}
                    </div>
                  </label>
                </div>
              );
            })}
          </div>
          <div className="mt-[2rem]">
            <button
              className="w-[9rem] h-[2.9rem] border-[1px] border-[#da3a00] text-[#da3a00] transition-all duration-200 hover:scale-[1.1]"
              onClick={prev}
            >
              Prev
            </button>
            <button
              className="w-[9rem] h-[3rem]  bg-[#da3a00] text-white ml-[0.7rem] transition-all duration-200 hover:scale-[1.1]"
              onClick={next}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
