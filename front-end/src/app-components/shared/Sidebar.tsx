import React from "react";
import { NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

const Sidebar = () => {
  return (
    <nav className="w-64 h-screen bg-gray-800 text-white flex-shrink-0">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-6">Club Management</h2>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="mb-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  cn(
                    "block p-2 rounded hover:bg-gray-700",
                    isActive ? "bg-gray-700" : ""
                  )
                }
              >
                Home
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="mb-4">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  cn(
                    "block p-2 rounded hover:bg-gray-700",
                    isActive ? "bg-gray-700" : ""
                  )
                }
              >
                About
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="mb-4">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  cn(
                    "block p-2 rounded hover:bg-gray-700",
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
