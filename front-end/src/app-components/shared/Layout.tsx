import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen w-full bg-white">
      <Sidebar />
      <div className="flex flex-col flex-grow h-full">
        <TopBar pageTitle="Your Page Title" />
        <main className="flex-grow p-6 overflow-auto h-full">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
