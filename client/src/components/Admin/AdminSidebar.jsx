import React, { useState } from "react";
import { FileText, Plane, LogOut, Menu, X } from "lucide-react";

const AdminSidebar = ({ activeTab, setActiveTab, isMobileOpen, onMobileClose }) => {
  // State for desktop sidebar collapse
  const [isCollapsed, setIsCollapsed] = useState(false);

  const tabs = [
    { id: "blogs", label: "Blogs", icon: <FileText size={20} /> },
    { id: "tours", label: "Tour Packages", icon: <Plane size={20} /> },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <div
        onClick={onMobileClose}
        className={`fixed inset-0 z-30 bg-black/60 transition-opacity lg:hidden ${isMobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex h-screen flex-col bg-[#711A79] text-white transition-transform duration-300 ease-in-out lg:static lg:z-auto lg:translate-x-0 ${isCollapsed ? "w-20" : "w-64"
          } ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Top section with logo and toggle */}
        <div className="flex items-center justify-between border-b border-white/20 p-4">
          {!isCollapsed && (
            <h1 className="text-xl font-bold whitespace-nowrap">Simply Andaman</h1>
          )}
          {/* Desktop Toggle */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden rounded-md p-1.5 hover:bg-white/20 lg:block"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <Menu size={20} />
          </button>
          {/* Mobile Close Button */}
          <button
            onClick={onMobileClose}
            className="rounded-md p-1.5 hover:bg-white/20 lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 p-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                onMobileClose(); // Close mobile sidebar on tab click
              }}
              className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left transition-colors duration-200 hover:bg-white/20 ${activeTab === tab.id ? "bg-white/30 font-semibold" : ""
                } ${isCollapsed ? "justify-center" : ""}`}
            >
              {tab.icon}
              {!isCollapsed && <span className="text-sm">{tab.label}</span>}
            </button>
          ))}
        </nav>

        {/* Logout at bottom */}
        <div className="border-t border-white/20 p-4">
          <button className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-red-200 transition-colors duration-200 hover:bg-red-500/30 ${isCollapsed ? 'justify-center' : ''}`}>
            <LogOut size={20} />
            {!isCollapsed && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;