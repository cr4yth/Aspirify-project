"use client";
import React from "react";
import { useState, useEffect } from "react";
import ques from "../jsons/ques.json";
import styles from "./quiz.module.css";

const Quiz = () => {
  const [arr, setarr] = useState([]);
  useEffect(() => {
    console.log(arr);
  }, [arr]);
  const que = ques.questions;
  const answers = ques.answers;
  const [qno, setqno] = useState(0);
  const [topping, settopping] = useState("1");
  const [a, seta] = useState(null);
  const next = () => {
    if (qno < 16) {
      setqno(qno + 1);
      if (a != null) {
        setarr([...arr, a[0]]);
      }
      if (a == null) {
        setarr([...arr, "1"]);
      }
      settopping("1");
    }
  };
  const reset = () => {
    setqno(0);
    setarr([]);
    seta(a);
    settopping("1");
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
                        seta(e.target.value);
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
            {qno > 0 && (
              <button className={styles.bleft} onClick={reset}>
                Reset
              </button>
            )}
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
