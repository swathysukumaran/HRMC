import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const TopBar = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <div className=" shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">{pageTitle}</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded"
        />
        <FaBell className="text-2xl text-gray-600" />
        <FaUserCircle className="text-2xl text-gray-600" />
      </div>
    </div>
  );
};

export default TopBar;
