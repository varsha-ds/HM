"use client"; // Mark this as a Client Component

import React from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toggleSidebar } from "../redux/globalSlice";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  // Hide the sidebar if it's collapsed
  if (!isSidebarCollapsed) {
    return null;
  }

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-gray-800 text-white z-50">
      {/* Hamburger Menu to Close Sidebar */}
      <div className="p-4 text-center border-b border-gray-700">
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="p-2 text-gray-700 hover:bg-gray-100 rounded focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link href="/" className="block p-2 hover:bg-gray-700 rounded">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Locations"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              Locations
            </Link>
          </li>
          <li>
            <Link href="/users" className="block p-2 hover:bg-gray-700 rounded">
              Users
            </Link>
          </li>
          <li>
            <Link href="/tasks" className="block p-2 hover:bg-gray-700 rounded">
              Tasks
            </Link>
          </li>
          <li>
            <Link
              href="/inventory"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              Inventory
            </Link>
          </li>
          <li>
            <Link
              href="/reports"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              Reports
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
