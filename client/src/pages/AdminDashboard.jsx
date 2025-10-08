import React, { useEffect, useState } from "react";
import AdminHeader from "../components/Admin/AdminHeader";
import AdminSidebar from "../components/Admin/AdminSidebar";
import AdminBlogTable from "../components/Admin/AdminBlogTable";
import AdminPackage from "../components/Admin/AdminPackage";

const AdminDashboard = () => {
    const [user, setUser] = useState(null);
    const [activeTab, setActiveTab] = useState("blogs"); // Default active tab

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/api/admin-dashboard`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                });
                if (!res.ok) throw new Error("Unauthorized");
                const data = await res.json();
                setUser(data.user);
            } catch (err) {
                localStorage.removeItem("token");
                window.location.href = "/admin-login";
            }
        };
        fetchDashboard();
    }, []);

    if (!user) return <p>Loading...</p>;

    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}
            <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <AdminHeader />

                <main className="p-6 flex-1">
                    {activeTab === "blogs" && <AdminBlogTable />}
                    {activeTab === "tours" && <AdminPackage />}
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
