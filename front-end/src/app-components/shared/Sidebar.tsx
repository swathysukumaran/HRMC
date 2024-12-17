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
        <h4 className="text-2xl font-heading font-bold mb-6">HRMC</h4>
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col">
            <NavigationMenuItem className="mb-4 w-full">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  cn(
                    "block p-2 rounded w-full hover:bg-gray-700 text-left",
                    isActive ? "bg-gray-700" : ""
                  )
                }
              >
                Dashboard
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="mb-4 w-full">
              <NavLink
                to="/members"
                className={({ isActive }) =>
                  cn(
                    "block p-2 rounded w-full hover:bg-gray-700 text-left",
                    isActive ? "bg-gray-700" : ""
                  )
                }
              >
                Members
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="mb-4 w-full">
              <NavLink
                to="/subscriptions"
                className={({ isActive }) =>
                  cn(
                    "block p-2 rounded w-full hover:bg-gray-700 text-left",
                    isActive ? "bg-gray-700" : ""
                  )
                }
              >
                Subscriptions
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="mb-4 w-full">
              <NavLink
                to="/roles"
                className={({ isActive }) =>
                  cn(
                    "block p-2 rounded w-full hover:bg-gray-700 text-left",
                    isActive ? "bg-gray-700" : ""
                  )
                }
              >
                Roles
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="mb-4 w-full">
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  cn(
                    "block p-2 rounded w-full hover:bg-gray-700 text-left",
                    isActive ? "bg-gray-700" : ""
                  )
                }
              >
                Events
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="mb-4 w-full">
              <NavLink
                to="/finances"
                className={({ isActive }) =>
                  cn(
                    "block p-2 rounded w-full hover:bg-gray-700 text-left",
                    isActive ? "bg-gray-700" : ""
                  )
                }
              >
                Finances
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="mb-4 w-full">
              <NavLink
                to="/reports"
                className={({ isActive }) =>
                  cn(
                    "block p-2 rounded w-full hover:bg-gray-700 text-left",
                    isActive ? "bg-gray-700" : ""
                  )
                }
              >
                Reports
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="mb-4 w-full">
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  cn(
                    "block p-2 rounded w-full hover:bg-gray-700 text-left",
                    isActive ? "bg-gray-700" : ""
                  )
                }
              >
                Settings
              </NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Sidebar;
