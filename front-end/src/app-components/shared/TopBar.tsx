import React from "react";
import { useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { FaUser, FaCog, FaBell } from "react-icons/fa";

const TopBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getCurrentNavItem = () => {
    switch (currentPath) {
      case "/dashboard":
        return "Dashboard";
      case "/members":
        return "Members";
      case "/subscriptions":
        return "Subscriptions";
      case "/roles":
        return "Roles";
      case "/events":
        return "Events";
      case "/finances":
        return "Finances";
      case "/reports":
        return "Reports";
      case "/settings":
        return "Settings";
      default:
        return "";
    }
  };

  return (
    <header className="bg-[#FAFBFC] text-primary p-4 w-full flex items-center justify-between">
      <h1 className="text-xl font-heading font-bold">{getCurrentNavItem()}</h1>
      <div className="flex items-center space-x-4 ml-auto">
        <Input type="text" placeholder="Search..." className="w-64" />
        <a href="/profile" className="text-primary">
          <FaUser className="w-4 h-4" />
        </a>
        <a href="/settings" className="text-primary">
          <FaCog className="w-4 h-4" />
        </a>
        <a href="/notifications" className="text-primary">
          <FaBell className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
};

export default TopBar;
