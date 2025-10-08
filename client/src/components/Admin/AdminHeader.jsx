import React from "react";
import { Menu, Bell } from "lucide-react";

const AdminHeader = ({ title, onMenuClick }) => {
  return (
    <header className="sticky top-0 z-10 flex h-16 flex-shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm sm:px-6">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle: Renders only on screens smaller than lg */}
        <button
          onClick={onMenuClick}
          className="rounded-full p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#711A79] lg:hidden"
          aria-label="Open sidebar"
        >
          <Menu size={24} />
        </button>

        {/* Page Title */}
        <h2 className="text-lg font-semibold text-gray-800 sm:text-xl">{title}</h2>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#711A79]"
          aria-label="Notifications"
        >
          <Bell size={20} />
        </button>

        {/* Admin Profile Avatar */}
        <div className="flex cursor-pointer items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="Admin Profile"
            className="h-10 w-10 rounded-full border-2 border-transparent transition-all hover:border-[#711A79]"
          />
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold text-gray-700">Admin User</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;