import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex max-w-screen-xl mx-auto w-full  ">
        <Sidebar></Sidebar>
        {children}
      </div>
    </div>
  );
};

export default layout;
