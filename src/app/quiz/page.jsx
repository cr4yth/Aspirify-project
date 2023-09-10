"use client";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Quiz = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("./ques.json").then((res) => console.log(res.data));
  }, []);
  return (
    <div>
      <div></div>
    </div>
  );
};

export default Quiz;
