import React, { useState } from "react";
import { FaRegBell, FaRegUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const pageTitles: { [key: string]: string } = {
  "/members": "Members",
  "/members/add": "Add Member",
  "/members/:id": "Member Details",
  // Add more paths and titles as needed
};

const TopBar = () => {
  const location = useLocation();
  const path = location.pathname;
  const pageTitle = pageTitles[path] || "Dashboard";
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="p-4 flex justify-between items-center bg-white">
      <div className="flex items-center space-x-4">
        {!showSearch && <h1 className="text-xl font-bold">{pageTitle}</h1>}
      </div>
      <div className="flex items-center space-x-4">
        {showSearch ? (
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded w-full md:w-auto"
          />
        ) : (
          <FiSearch
            className="text-2xl text-gray-600 md:hidden"
            onClick={toggleSearch}
          />
        )}
        <input
          type="text"
          placeholder="Search..."
          className="hidden md:block px-4 py-2 border rounded w-full md:w-auto"
        />
        <FaRegBell className="text-2xl text-gray-600" />
        <FaRegUserCircle className="text-2xl text-gray-600" />
      </div>
    </div>
  );
};

export default TopBar;
