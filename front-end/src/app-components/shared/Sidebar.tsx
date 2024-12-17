import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  FaTachometerAlt,
  FaUsers,
  FaDollarSign,
  FaUserShield,
  FaCalendarAlt,
  FaFileInvoiceDollar,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
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
                    "flex items-center p-2 rounded w-full hover:bg-gray-700 hover:text-white text-left text-white",
                    isActive ? "bg-[#3791ED]" : ""
                  )
                }
              >
                <FaTachometerAlt className="mr-2" />
                Dashboard
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="mb-4 w-full">
              <NavLink
                to="/members"
                className={({ isActive }) =>
                  cn(
                    "flex items-center p-2 rounded w-full hover:bg-gray-700 hover:text-white text-left text-white",
                    isActive ? "bg-[#3791ED]" : ""
                  )
                }
              >
                <FaUsers className="mr-2" />
                Members
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="mb-4 w-full">
              <NavLink
                to="/subscriptions"
                className={({ isActive }) =>
                  cn(
                    "flex items-center p-2 rounded w-full hover:bg-gray-700 hover:text-white text-left text-white",
                    isActive ? "bg-[#3791ED]" : ""
                  )
                }
              >
                <FaDollarSign className="mr-2" />
                Subscriptions
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="mb-4 w-full">
              <NavLink
                to="/roles"
                className={({ isActive }) =>
                  cn(
                    "flex items-center p-2 rounded w-full hover:bg-gray-700 hover:text-white text-left text-white",
                    isActive ? "bg-[#3791ED]" : ""
                  )
                }
              >
                <FaUserShield className="mr-2" />
                Roles
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="mb-4 w-full">
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  cn(
                    "flex items-center p-2 rounded w-full hover:bg-gray-700 hover:text-white text-left text-white",
                    isActive ? "bg-[#3791ED]" : ""
                  )
                }
              >
                <FaCalendarAlt className="mr-2" />
                Events
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="mb-4 w-full">
              <NavLink
                to="/finances"
                className={({ isActive }) =>
                  cn(
                    "flex items-center p-2 rounded w-full hover:bg-gray-700 hover:text-white text-left text-white",
                    isActive ? "bg-[#3791ED]" : ""
                  )
                }
              >
                <FaFileInvoiceDollar className="mr-2" />
                Finances
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="mb-4 w-full">
              <NavLink
                to="/reports"
                className={({ isActive }) =>
                  cn(
                    "flex items-center p-2 rounded w-full hover:bg-gray-700 hover:text-white text-left text-white",
                    isActive ? "bg-[#3791ED]" : ""
                  )
                }
              >
                <FaChartBar className="mr-2" />
                Reports
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="mb-4 w-full">
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  cn(
                    "flex items-center p-2 rounded w-full hover:bg-gray-700 hover:text-white text-left text-white",
                    isActive ? "bg-[#3791ED]" : ""
                  )
                }
              >
                <FaCog className="mr-2" />
                Settings
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="mb-4 w-full">
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  cn(
                    "flex items-center p-2 rounded w-full hover:bg-gray-700 hover:text-white text-left text-white",
                    isActive ? "bg-[#3791ED]" : ""
                  )
                }
              >
                <FaSignOutAlt className="mr-2" />
                Logout
              </NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Sidebar;
