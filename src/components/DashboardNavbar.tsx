import { Bell, ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function DashboardNavbar() {
  return (
    <div className="w-full h-14 bg-white top-0 px-24 flex items-center justify-between shadow-[0_3px_10px_rgb(0,0,0,0.08)]">
      <div className="flex items-center border border-neutral-300 rounded w-64 p-1.5">
        <Search className="text-neutral-400 w-3 h-3 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="border-none text-[10px] focus:outline-none focus:ring-0 text-neutral-600"
        />
      </div>
      <div className="flex items-center">
        <Bell className="w-5 h-5 text-neutral-700 mr-6" />
        <Image
          src={"/pengu-pfp.jpg"}
          width={30}
          height={30}
          alt="Profile picture"
          className="rounded-full"
        />
        <span className="text-sm text-black mx-2">John Doe</span>
        <ChevronDown className="h-4 w-4 text-neutral-600" />
      </div>
    </div>
  );
}
