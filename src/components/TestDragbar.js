import React, { useState } from "react";
import { Link } from "react-router-dom";

const TestDragbar = () => {
  return (
    <div className="border-r border-gray-600 bg-neutral-900 text-neutral-300 w-max h-screen p-2">
      <div className="flex flex-col justify-center items-center">
        <Link>Src</Link>
        <Link>Src</Link>
        <Link>Src</Link>
        <Link>Src</Link>
        <Link>Src</Link>
        <Link>Src</Link>
        <Link>Src</Link>
      </div>
    </div>
  );
};

export default TestDragbar;