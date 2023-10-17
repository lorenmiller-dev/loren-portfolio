import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="border-r border-gray-200 bg-neutral-900 text-neutral-300 w-max h-screen p-4">
        <ul>
          <li>Home</li>
          <li>About Me</li>
          <li>Experience</li>
          <li>Projects</li>
        </ul>
    </div>
  );
};

export default Navbar;
