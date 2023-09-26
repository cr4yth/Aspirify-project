"use client";
import React from "react";
import { useState } from "react";
import ques from "../jsons/ques.json";
import styles from "./quiz.module.css";

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
    <div className={styles.king}>
      <div className={styles.subking}>
        <div>
          <img className={styles.quizimg} src="./qui.webp"></img>
        </div>
        <div className={styles.form}>
          <div className={styles.ques}>
            <span>Question</span>
            <span>{qno + 1}</span>
            <span>/17</span>
          </div>
          <div className={styles.question}>
            <span className={styles.q}>{que[qno].question}</span>
          </div>
          <div className={styles.answer}>
            {answers?.map((dat) => {
              return (
                <div className={styles.options}>
                  <label className={styles.label} for={dat.ans}>
                    <input
                      type="radio"
                      value={dat.id}
                      id={dat.ans}
                      name="topping"
                      checked={topping === dat.id}
                      onChange={(e) => {
                        settopping(e.target.value);
                      }}
                      className={styles.input}
                    />
                    <div className={styles.answ}>{dat.ans}</div>
                  </label>
                </div>
              );
            })}
          </div>
          <div className={styles.buttons}>
            <button
              disabled={qno === 0 ? true : false}
              className={qno === 0 ? styles.bbleft : styles.bleft}
              onClick={prev}
            >
              Prev
            </button>
            <button className={styles.bright} onClick={next}>
              {qno === 16 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
