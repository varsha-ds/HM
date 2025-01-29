"use client"; // Mark this as a Client Component

import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <div className="p-4 bg-gray-100 flex-1">{children}</div>
      </main>
    </div>
  );
};

export default DashboardWrapper;
