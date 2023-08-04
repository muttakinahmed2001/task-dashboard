"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="px-12      flex justify-start   sm:justify-between    sm:items-center   h-[55px] text-[white] bg-[#171717] ">
      <button
        className="lg:hidden text-white p-2 focus:outline-none"
        onClick={toggleDropdown}>
        {isDropdownOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      <ul
        className={`lg:flex gap-[25px] text-[14px] justify-start ${
          isDropdownOpen ? "hidden lg:flex" : "flex"
        }`}>
        <li className={`hidden lg:flex items-center justify-center gap-2`}>
          <Image src={"/home.png"} width={18} height={18} alt="Home" />
          Home
        </li>
        <li className={`hidden lg:flex items-center justify-center gap-2`}>
          <Image
            src={"/contents-icon.png"}
            width={18}
            height={18}
            alt="contents-icon.png"
          />
          Contents
        </li>
        <li className={`hidden lg:flex items-center justify-center gap-2`}>
          <Image
            src={"/categories-icon.png"}
            width={18}
            height={18}
            alt="categories-icon"
          />
          Categories
        </li>
        <li className={`hidden lg:flex items-center justify-center gap-2`}>
          <Image
            src={"/settings-icon.png"}
            width={18}
            height={18}
            alt="settings-icon"
          />
          Settings
        </li>
      </ul>

      <ul
        className={`${
          isDropdownOpen ? "flex flex-col justify-start z-[9] gap-4" : "hidden"
        } lg:hidden absolute top-[55px] left-0 bg-[#171717] w-full p-4`}>
        <li className="flex items-center   gap-2">
          <Image src={"/home.png"} width={18} height={18} alt="Home" />
          Home
        </li>
        <li className="flex items-center  gap-2">
          <Image
            src={"/contents-icon.png"}
            width={18}
            height={18}
            alt="contents-icon.png"
          />
          Contents
        </li>
        <li className="flex items-center  gap-2">
          <Image
            src={"/categories-icon.png"}
            width={18}
            height={18}
            alt="categories-icon"
          />
          Categories
        </li>
        <li className="flex items-center  gap-2">
          <Image
            src={"/settings-icon.png"}
            width={18}
            height={18}
            alt="settings-icon"
          />
          Settings
        </li>
      </ul>

      <div className="flex items-center gap-2 p-3">
        <Link className="btn btn-sm my-2" href={"/login"}>
          Login
        </Link>
        <div className="flex gap-2 items-center border rounded-full me-3 p-2 text-black bg-white">
          <Image src={"/profile.png"} width={30} height={30} alt="profile" />
          <h1>İsmail İhsan Bülbül</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
