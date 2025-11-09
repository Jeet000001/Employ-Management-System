import React from "react";
import EmployDashboardHeader from "./components/EmployDashboardHeader";
import AdminDashboardForm from "./components/AdminDashboardForm";
import AdminAsignTask from "./components/AdminAsignTask";

const AdminDashboard = () => {
  return (
    <div className="overflow-x-hidden">
      <EmployDashboardHeader />

      <div className="mb-8 w-full flex justify-center mt-10">
        <AdminDashboardForm />
      </div>
      <div className="w-full px-5">
        <AdminAsignTask />
      </div>
    </div>
  );
};

export default AdminDashboard;
