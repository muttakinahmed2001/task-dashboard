import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="max-w-screen-xl mx-auto w-full flex justify-between items-center p-[30px] h-[55px] text-[white] bg-[#171717]  ">
      <ul className="flex gap-[25px] text-[14px] ">
        <li className="flex items-center justify-center gap-2">
          <Image src={"/home.png"} width={18} height={18} alt="Home"></Image>
          Home
        </li>
        <li className="flex items-center justify-center gap-2">
          <Image
            src={"/contents-icon.png"}
            width={18}
            height={18}
            alt="contents-icon.png"></Image>{" "}
          Contents
        </li>
        <li className="flex items-center justify-center gap-2">
          <Image
            src={"/categories-icon.png"}
            width={18}
            height={18}
            alt="categories-icon"></Image>{" "}
          Categories
        </li>
        <li className="flex items-center justify-center gap-2">
          <Image
            src={"/settings-icon.png"}
            width={18}
            height={18}
            alt="settings-icon"></Image>{" "}
          Settings
        </li>
      </ul>

      <div className="flex  gap-2 p-3">
        <Link className="btn btn-sm  my-2" href={"/login"}>
          Login
        </Link>
        <div className="flex gap-2 items-center   border rounded-full p-3 text-black bg-white">
          <Image
            src={"/profile.png"}
            width={30}
            height={30}
            alt="profile"></Image>
          <h1>İsmail İhsan Bülbül</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
