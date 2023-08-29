"use client";

import Navbar from "@/components/navbar";
import SideBarView from "@/components/sidebar";
import React, { useState } from "react";

const Layout = ({ children }) => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);

  const toggleSidebar = () => {
    setisSideBarOpen(!isSideBarOpen);
  };
  return (
    <div className="flex-col">
      <nav>
        <Navbar toggleSidebar={toggleSidebar} />
        <SideBarView isSideBarOpen={isSideBarOpen} />
      </nav>
      <div className="h-screen ml-0 md:ml-52 pt-12">{children}</div>
    </div>
  );
};

export default Layout;
