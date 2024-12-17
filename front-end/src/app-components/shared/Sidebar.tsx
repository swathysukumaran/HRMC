import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Sidebar = () => {
  return (
    <nav className="w-64 h-screen bg-[#343439] text-white flex-shrink-0 rounded-[20px]">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-6">Club Management</h2>
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col">
            <NavigationMenuItem className="mb-4 w-full">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  cn(
                    "block p-2 rounded w-full hover:bg-gray-700 text-left",
                    isActive ? "bg-gray-700" : ""
                  )
                }
              >
                Home
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="mb-4 w-full">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  cn(
                    "block p-2 rounded w-full hover:bg-gray-700 text-left",
                    isActive ? "bg-gray-700" : ""
                  )
                }
              >
                About
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="mb-4 w-full">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  cn(
                    "block p-2 rounded w-full hover:bg-gray-700 text-left",
                    isActive ? "bg-gray-700" : ""
                  )
                }
              >
                Contact
              </NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Sidebar;
