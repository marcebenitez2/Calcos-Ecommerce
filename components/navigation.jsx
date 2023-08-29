"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import SideBarView from "./sidebar";

const Navigation = () => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);

  const toggleSidebar = () => {
    setisSideBarOpen(!isSideBarOpen);
  };

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <SideBarView isSideBarOpen={isSideBarOpen} />
    </div>
  );
};

export default Navigation;
