import React from "react";
import SideNav from "./components/SideNav";
import { Outlet } from "react-router-dom";
import { dashboardData } from "@/hooks/dashboardData";
import ErrorBoundary from "@/pages/ErrorBoundary";

const MainLayout = () => {
  return (
    <ErrorBoundary>
      <div className="bg-[#f9f9ff] font-roboto lg:p-2">
        <SideNav />
      </div>
    </ErrorBoundary>
  );
};

export default MainLayout;
