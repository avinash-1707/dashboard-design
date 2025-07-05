import {
  CheckCheck,
  ChevronDown,
  ChevronUp,
  Globe,
  LayoutGrid,
  SquarePen,
  StickyNote,
} from "lucide-react";
import React from "react";

interface OverviewElement {
  title: string;
  icon: React.ReactNode;
  number: number;
  detail: any;
}

const overviewCards: OverviewElement[] = [
  {
    title: "Total Workspaces",
    icon: (
      <div className="h-fit w-fit p-1.5 bg-purple-100 rounded-md">
        <LayoutGrid className="w-4 h-4 text-purple-700" />
      </div>
    ),
    number: 4,
    detail: (
      <span className="text-green-500">
        <ChevronUp className="inline-block h-3 w-3" /> 12% from last month
      </span>
    ),
  },
  {
    title: "Total Signed Contracts",
    icon: (
      <div className="h-fit w-fit p-1.5 bg-cyan-100/50 rounded-md">
        <StickyNote className="w-4 h-4 text-cyan-500" />
      </div>
    ),
    number: 51,
    detail: (
      <span className="text-green-500">
        <ChevronUp className="inline-block h-3 w-3" /> 12% from last month
      </span>
    ),
  },
  {
    title: "Contracts Drafted",
    icon: (
      <div className="h-fit w-fit p-1.5 bg-yellow-100/40 rounded-md">
        <SquarePen className="h-4 w-4 text-yellow-300" />
      </div>
    ),
    number: 4,
    detail: (
      <span className="text-red-500">
        <ChevronDown className="inline-block h-3 w-3" /> 4% from last month
      </span>
    ),
  },
  {
    title: "Contracts Reviewed",
    icon: (
      <div className="h-fit w-fit p-1.5 bg-green-100/60 rounded-md">
        <CheckCheck className="h-4 w-4 text-green-600" />
      </div>
    ),
    number: 18,
    detail: (
      <span className="text-green-500">
        <ChevronUp className="inline-block h-3 w-3" /> 12% from last month
      </span>
    ),
  },
  {
    title: "Contracts Translated",
    icon: (
      <div className="h-fit w-fit p-1.5 bg-red-100/50 rounded-md">
        <Globe className="h-4 w-4 text-red-500" />
      </div>
    ),
    number: 9,
    detail: (
      <span className="text-green-500">
        <ChevronUp className="inline-block h-3 w-3" /> 10% from last month
      </span>
    ),
  },
];

export default function DashboardOverview() {
  return (
    <div className="w-full h-1/4 flex flex-col border-b border-neutral-200 p-3">
      <h1 className="text-black font-bold text-xl my-3">Dashboard Overview</h1>
      <div className="w-full flex-1 p-1 grid grid-cols-5">
        {overviewCards.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col rounded-xl p-4 pr-6 mx-2 shadow-[0_1px_5px_rgb(0,0,0,0.2)]"
          >
            <div className="flex justify-between">
              <span className="text-neutral-700 font-semibold text-[12px]">
                {item.title}
              </span>
              {item.icon}
            </div>
            <div className="text-xl font-bold text-black">{item.number}</div>
            <div className="text-[10px] mt-2">{item.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
