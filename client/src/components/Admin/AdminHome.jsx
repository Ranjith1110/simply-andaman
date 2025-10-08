import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import AdminBlogTable from "./AdminBlogTable";
import AdminTourTable from "./AdminTourTable";

const AdminHome = () => {
  const [activeSection, setActiveSection] = useState("blogs");

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar setActiveSection={setActiveSection} />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <AdminHeader />

        <main className="p-6 flex-1">
          {activeSection === "blogs" && <AdminBlogTable />}
          {activeSection === "tours" && <AdminTourTable />}
        </main>
      </div>
    </div>
  );
};

export default AdminHome;
