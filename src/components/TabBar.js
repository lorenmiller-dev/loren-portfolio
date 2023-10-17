import React, { useState } from "react";
import { Link } from "react-router-dom";

const TabBar = () => {
  return (
    <div className="border-b border-gray-200 bg-neutral-900 w-screen p-2">
      <div className="flex justify-center">
        <div className="flex-1 max-w-md self-center">
          <input
            type="text"
            placeholder="lorens-portfolio"
            className="w-full rounded-lg p-2 border border-gray-300 text-white text-center text-xs bg-neutral-800"
            disabled
          />
        </div>
        <div className="flex">
          <Link className="bg-search-icon w-6 h-6 bg-no-repeat bg-purple-300"></Link>
        </div>
        <div className="flex">
          <Link className="bg-user-icon w-6 h-6 bg-no-repeat bg-red-300"></Link>
        </div>
        <div className="flex">
          <Link className="bg-search-icon w-6 h-6 bg-no-repeat bg-blue-200"></Link>
        </div>
        <div className="flex">
          <Link className="bg-search-icon w-6 h-6 bg-no-repeat"></Link>
        </div>
      </div>
    </div>
  );
};

export default TabBar;
