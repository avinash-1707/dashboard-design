import React from "react";
import DashboardNavbar from "./DashboardNavbar";
import DashboardOverview from "./DashboardOverview";
import Workspaces from "./Workspaces";

export default function DashboardContent() {
  return (
    <div className="bg-white flex-1 w-full">
      <DashboardNavbar />
      <DashboardOverview />
      <Workspaces />
    </div>
  );
}
