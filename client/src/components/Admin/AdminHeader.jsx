import React from "react";

const AdminHeader = ({ title }) => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/40"
          alt="Admin"
          className="w-10 h-10 rounded-full border"
        />
      </div>
    </header>
  );
};

export default AdminHeader;
