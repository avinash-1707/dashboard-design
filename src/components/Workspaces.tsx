import { Grid, List, Search } from "lucide-react";
import React from "react";

export default function Workspaces() {
  return (
    <div className="w-full min-h-1/2 p-4 px-8">
      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
        <h1 className="text-black text-xl font-bold">Workspaces</h1>
        <div className="rounded-md flex items-center border border-gray-400">
          <button className="text-black rounded-l-md text-[12px] p-2">
            <Grid className="inline-block text-black w-3 h-3" /> Grid
          </button>
          <button className="bg-black rounded-r-md text-white text-[12px] p-2">
            <List className="inline-block w-3 h-3 text-white" /> List
          </button>
        </div>
      </div>
      <div className="border-b border-gray-200 flex">
        <div className="py-3 px-5 mr-2 text-gray-600 font-semibold text-md">
          Contracts
        </div>
        <div className="py-3 px-5 text-black font-semibold text-md border-b-3 border-black">
          Litigation
        </div>
      </div>
      <div className="w-full px-5 py-3 flex">
        <div className="flex items-center border border-neutral-300 rounded-md w-1/3 p-1.5">
          <Search className="text-neutral-400 w-3 h-3 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="border-none flex-1 focus:outline-none focus:ring-0 text-[10px] text-neutral-600"
          />
        </div>
        <select className="w-32 mx-3 p-1.5 border border-neutral-300 bg-white text-gray-800 text-[12px] rounded-md shadow-sm focus:outline-none focus:ring-0">
          <option value="crime" selected>
            All types
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <select className="w-32 mr-3 p-1.5 border border-neutral-300 bg-white text-gray-800 text-[12px] rounded-md shadow-sm focus:outline-none focus:ring-0">
          <option value="crime" selected>
            All status
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <button className="bg-gray-900/80 hover:bg-gray-950 text-white px-2 py-1.5 rounded-md text-[12px]">
          Create New Workspace
        </button>
      </div>
    </div>
  );
}
