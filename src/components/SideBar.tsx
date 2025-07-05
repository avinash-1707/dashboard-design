import {
  CreditCard,
  LayoutGrid,
  LogOut,
  MessageCircle,
  Settings,
  Users,
} from "lucide-react";
import React from "react";

interface navbarItem {
  icon: React.ReactNode;
  name: string;
}

const navbarItems: navbarItem[] = [
  {
    icon: <LayoutGrid className="w-4 h-4" />,
    name: "Workspaces",
  },
  {
    icon: <Users className="w-4 h-4" />,
    name: "Team Management",
  },
  {
    icon: <CreditCard className="w-4 h-4" />,
    name: "Billings & Plans",
  },
  {
    icon: <Settings className="w-4 h-4" />,
    name: "Settings",
  },
  {
    icon: <MessageCircle className="w-4 h-4" />,
    name: "Contact Admin",
  },
];

export default function SideBar() {
  return (
    <div className="relative min-h-screen w-56 bg-teal-950 px-2 py-4">
      <div className="text-white font-bold text-2xl pt-5 px-3">LeXi Ai</div>
      <div className="w-full mt-12 mx-auto h-fit">
        {navbarItems.map((item, idx) => (
          <div
            key={idx}
            className="w-full hover:bg-white/30 flex items-center justify-start p-3 rounded-lg"
          >
            {item.icon}
            <span className={"text-white text-[12px] ml-3"}>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="bottom-0 absolute p-5 border-t flex w-11/12 mx-auto border-white/30">
        <LogOut className="w-5 h-5 ml-3" />
        <span className="text-sm ml-3">Sign Out</span>
      </div>
    </div>
  );
}
