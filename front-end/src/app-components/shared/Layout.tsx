import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col flex-grow h-full ">
        <TopBar toggleSidebar={toggleSidebar} />
        <main className="flex-grow p-0 md:p-6 overflow-auto h-full Lg:pt-16">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
