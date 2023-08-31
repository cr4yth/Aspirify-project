"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

const nav = () => {
  const [showserv, setshowserv] = useState(false);
  const show = () => {
    setshowserv(true);
  };
  const notshow = () => {
    setTimeout(() => {
      setshowserv(false);
    }, 1500);
  };
  return (
    <div className="navbar flex justify-between min-w-[960px] ">
      <div className="nav-left pl-[2.6rem] pt-8 ">
        <Link href="/">
          <div className="title text-[3.2rem]">Aspirify</div>
          <div className="sutitle text-[1.1rem]">Career Compass</div>
        </Link>
      </div>
      <div className="navigations flex w-[30rem] justify-around text-[1.2rem] pt-5 items-center pr-4 ">
        <Link href="/">
          <div className="nav-items text-black hover:bg-[#da3a00] hover:text-white p-2">
            Home
          </div>
        </Link>
        <div
          className="nav-items relative"
          onMouseEnter={show}
          onMouseLeave={notshow}
        >
          <Link
            href="/services"
            className="text-black hover:bg-[#da3a00] hover:text-white p-2"
          >
            services
          </Link>
          <div>
            {showserv && (
              <div className="service-options absolute mt-4 right-[-0.5rem] top-[1rem] pt-2">
                <div className="sr-op">Quiz</div>
                <div className="sr-op">Roadmap</div>
                <div className="sr-op">Degree</div>
              </div>
            )}
          </div>
        </div>
        <div className="nav-ite">
          <Link
            href="/login"
            className="text-black hover:bg-[#da3a00] hover:text-white p-2"
          >
            log in/sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default nav;
