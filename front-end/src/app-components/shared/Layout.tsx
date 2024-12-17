import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <TopBar />
        <main className="flex-grow p-4 bg-gray-100 w-full">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
