import Image from "next/image";
import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="flex w-full justify-center h-full">
      <div className="flex flex-col md:flex-row   justify-center items-center ">
        <div className="p-5 sm:p-0">
          {" "}
          <Image
            src="/login.png"
            width={450}
            height={450}
            alt="Mountain"></Image>
        </div>
        <form className="p-5  text-center sm:text-left  bg-[#FFFFFF]     h-[565px] border ">
          <h1 className=" text-xl sm:text-[22px] font-[600]">Form title</h1>
          <p className="leading-6 font-[300px]">
            Donec tortor quam at duis tortor.
          </p>
          <div className="form-control  my-5 ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Placeholder Content"
              className="input input-bordered "
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Placeholder Content"
              className="input input-bordered"
            />
          </div>
          <div className="flex justify-end mt-5 font-[600] text-[#525252]">
            <h1>Forgot Password?</h1>
          </div>
          <button className=" w-full sm:w-[420px] my-5 rounded-lg px-5 py-3 bg-[#2563EB]">
            Login
          </button>
          <div className="divider">OR</div>

          <button className="w-full sm:w-[420px] border-2 rounded-lg px-5 py-3 font-[500] text-[#525252] ">
            Register now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
