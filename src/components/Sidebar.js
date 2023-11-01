import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="border-r border-gray-600 bg-neutral-900 text-neutral-300 w-max h-screen p-1/2">
      <div className="flex flex-col justify-center items-center">
        <Link className="bg-search-icon w-6 h-6 bg-no-repeat m-2"></Link>
        <Link className="bg-linkedin-icon w-6 h-6 bg-no-repeat m-2"></Link>
        <Link className="bg-resume-icon w-7 h-7 bg-no-repeat m-2"></Link>
        <Link className="absolute bottom-0 bg-user-icon w-6 h-6 bg-no-repeat m-2 pb-0"></Link>
      </div>
    </div>
  );
};

export default Sidebar;
