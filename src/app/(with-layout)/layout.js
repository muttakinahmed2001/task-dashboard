import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex     ">
        <Sidebar></Sidebar>
        {children}
      </div>
    </div>
  );
};

export default layout;
