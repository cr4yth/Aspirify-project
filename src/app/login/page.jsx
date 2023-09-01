import React from "react";
import Link from "next/link";
const login = () => {
  return (
    <div className="fo justify-center flex w-[100%] mt-[10vh] mb-[2rem] min-w-[1000px] ">
      <div>
        <img
          src="/loginimagage.webp"
          className="login-image w-[34rem] h-[34rem]"
        ></img>
      </div>
      <form className="loginform h-[542px] flex flex-col w-[26rem] pl-[4.5rem] pr-[4.5rem] border-[1px] border-black border-solid">
        <div className="wb mt-[3.5rem] text-[2rem] mb-[0.8rem] text-center">
          Welcome back!
        </div>
        <div className="peyd text-center text-[0.9rem] mb-[3.5rem]">
          please enter your details
        </div>
        <div className="tabu flex flex-col justify-center mb-[1.5rem]">
          <div className="headings-login pl-[0.2rem]">Email</div>
          <input
            className="login-inputab outline-none border-t-none border-l-none border-r-none border-b-[1px] border-b-black border-b-solid h-[1.5rem] text-[1.2rem] w-[99%] pl-[0.2rem]"
            type="email"
          ></input>
        </div>
        <div className="tabu">
          <div className="headings-login pl-[0.2rem]">Password</div>
          <input
            className="login-inputab outline-none border-t-none border-l-none border-r-none border-b-[1px] border-b-black border-b-solid h-[1.5rem] text-[1.2rem] w-[99%] pl-[0.2rem]"
            type="password"
          ></input>
        </div>
        <div className="fp text-[0.8rem] mt-[0.5rem] flex justify-end hover:underline hover:text-[black] font-medium">
          forgot password?
        </div>
        <div className="lgc flex flex-col items-center mt-[3rem]">
          <button className="logi-button w-[10rem] h-[2rem] text-[1rem] text-[white] bg-black border-none">
            login
          </button>
          <div className="sepp flex mt-[2rem] items-center ">
            <hr className="hrrr w-[5rem] bg-black opacity-[0.8] h-[2px]"></hr>
            <div className="order mr-[1rem] ml-[1rem]">or</div>
            <hr className="hrrr hrrr w-[5rem] bg-black opacity-[0.8] h-[2px]"></hr>
          </div>
          <div className="ca mt-[2rem]">
            Don't have an account?{" "}
            <span>
              <Link
                className="signup hover:underline hover:text-black font-medium"
                href="/signup"
              >
                signup
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default login;
