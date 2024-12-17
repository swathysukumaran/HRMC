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
    <header className="bg-[#FAFBFC] text-primary p-4 w-full flex items-center justify-between">
      <h4 className="font-heading font-bold">{getCurrentNavItem()}</h4>
      <div className="flex items-center space-x-4 ml-auto">
        <Input type="text" placeholder="Search..." className="w-64" />
        <a href="/profile" className="text-primary">
          <FaUser className="w-5 h-5" />
        </a>
        <a href="/settings" className="text-primary">
          <FaCog className="w-5 h-5" />
        </a>
        <a href="/notifications" className="text-primary">
          <FaBell className="w-5 h-5" />
        </a>
      </div>
    </header>
  );
};

export default TopBar;
