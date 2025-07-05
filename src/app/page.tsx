import DashboardContent from "@/components/DashboardContent";
import SideBar from "@/components/SideBar";
import React from "react";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full">
      <SideBar />
      <DashboardContent />
    </div>
  );
}
