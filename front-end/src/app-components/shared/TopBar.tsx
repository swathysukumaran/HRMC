import React from "react";
import { useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { FaUser, FaCog, FaBell } from "react-icons/fa";

const TopBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getCurrentNavItem = () => {
    switch (currentPath) {
      case "/":
        return "Home";
      case "/about":
        return "About";
      case "/contact":
        return "Contact";
      default:
        return "";
    }
  };

  return (
    <header className="bg-transparent text-black p-4 w-full flex items-center justify-between">
      <h1 className="text-xl font-bold">{getCurrentNavItem()}</h1>
      <div className="flex items-center space-x-4 ml-auto">
        <Input type="text" placeholder="Search..." className="w-64" />
        <a href="/profile" className="text-black">
          <FaUser className="w-6 h-6" />
        </a>
        <a href="/settings" className="text-black">
          <FaCog className="w-6 h-6" />
        </a>
        <a href="/notifications" className="text-black">
          <FaBell className="w-6 h-6" />
        </a>
      </div>
    </header>
  );
};

export default TopBar;
