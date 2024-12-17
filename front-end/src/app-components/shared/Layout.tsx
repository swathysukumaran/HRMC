import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen w-full bg-[#F0F2F5]">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <TopBar />
        <main className="flex-grow p-4 bg-[#F0F2F5]">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
