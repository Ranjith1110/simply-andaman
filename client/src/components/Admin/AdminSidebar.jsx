import React, { useState } from "react";
import { FileText, Plane, LogOut, Menu } from "lucide-react";

const AdminSidebar = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(true);

  const tabs = [
    { id: "blogs", label: "Blogs", icon: <FileText size={20} /> },
    { id: "tours", label: "Tour Packages", icon: <Plane size={20} /> },
  ];

  return (
    <aside
      className={`bg-[#711A79] text-white min-h-screen flex flex-col transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Top section with logo and toggle */}
      <div className="flex items-center justify-between p-5 border-b border-white/20">
        {isOpen && (
          <div className="flex items-center gap-2">
            {/* <img src= alt="Logo" className="h-10 w-10 object-contain" /> */}
            <h1 className="text-xl font-bold">Simply Andaman</h1>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 hover:bg-white/20 rounded-md transition"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg hover:bg-white/20 transition-all duration-200 ${
              activeTab === tab.id ? "bg-white/30" : ""
            }`}
          >
            {tab.icon}
            {isOpen && <span className="text-md font-medium">{tab.label}</span>}
          </button>
        ))}
      </nav>

      {/* Logout at bottom */}
      <div className="p-5 mt-auto">
        <button className="flex items-center gap-3 text-red-200 hover:text-red-400 w-full px-4 py-3 rounded-lg transition">
          <LogOut size={20} />
          {isOpen && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
