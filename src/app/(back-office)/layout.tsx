"use client";
import NavBar from "@/components/back-office/NavBar";
import SideBar from "@/components/back-office/SideBar";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      <div
        className={`flex-grow min-h-screen transition-all duration-300 ${
          showSidebar ? "lg:ml-64" : "ml-0"
        }`}
      >
        {/* Navbar */}
        <NavBar setShowSidebar={setShowSidebar} />

        {/* Main Content */}
        <main className="p-8 dark:bg-slate-950 bg-slate-100 dark:text-slate-50 text-slate-900 min-h-screen overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
