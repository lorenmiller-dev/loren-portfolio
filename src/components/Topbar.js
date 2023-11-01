import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="border-b border-gray-600 bg-neutral-900 w-screen p-2">
      <div className="flex">
        <div className="flex-1 max-w-md mx-auto">
          <input
            type="text"
            placeholder="lorens-portfolio"
            className="w-full rounded-lg p-1 border border-neutral-500 text-center text-xs bg-neutral-800"
            disabled
            style={{ color: 'white', opacity: '20' }} // Inline style to set the text color to white
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;

