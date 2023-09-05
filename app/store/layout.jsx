import LogoAndLog from "@/components/logoAndLog";
import React from "react";

const Layout = ({ children }) => {


  return (
    <div>
      <LogoAndLog/>
      <div className="w-4/6 m-auto lgn:w-5/6 ">{children}</div>
    </div>
  );
};

export default Layout;
