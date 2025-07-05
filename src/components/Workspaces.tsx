"use client";
import { Grid, List, Search, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface Workspace {
  name: string;
  client: string;
  opponent: string;
  caseType: string;
  date: string;
  area: string;
  representer: string;
}

const workspaces: Workspace[] = [
  {
    name: "Morgan Acquisition",
    client: "Sarah Chen",
    opponent: "Chen Sarah",
    caseType: "Criminal",
    area: "Jalandar",
    date: "15-07-2024",
    representer: "Meena Tiwari",
  },
];

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node))
        callback();
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);

  return ref;
};

export default function Workspaces() {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const ref = useOutsideClick(() => setCreateModalOpen(false));

  const [wname, setWName] = useState("");
  const [caseType, setCaseType] = useState("");
  const [client, setClient] = useState("");
  const [opponent, setOpponent] = useState("");
  const [area, setArea] = useState("");
  const [date, setDate] = useState("");
  const [representer, setRepresenter] = useState("");

  const handleSave = () => {
    if (
      !wname &&
      !client &&
      !opponent &&
      !caseType &&
      !area &&
      !date &&
      !representer
    ) {
      alert("Please enter all the details!");
      return;
    }
    const formData = {
      name: wname,
      client,
      opponent,
      caseType,
      area,
      date,
      representer,
    };
    workspaces.push(formData);
    setCreateModalOpen(false);
    setWName("");
    setClient("");
    setOpponent("");
    setCaseType("");
    setArea("");
    setDate("");
    setRepresenter("");
  };
  return (
    <div className="w-full flex flex-col min-h-1/2 p-4 px-8">
      {createModalOpen && (
        <div className="fixed z-10 h-full w-full inset-0 bg-black/20 backdrop-blur-[8px]"></div>
      )}
      <AnimatePresence>
        {createModalOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
            ref={ref}
            className="h-3/4 fixed inset-0 z-20 m-auto flex flex-col justify-between bg-white w-96 rounded-2xl border border-neutral-200"
          >
            <div className="h-12 w-full border-b border-neutral-200 flex items-center justify-between px-5">
              <h1 className="text-xl text-black font-bold">Case Details</h1>
              <X
                className="text-black/50 hover:text-black cursor-pointer"
                onClick={() => setCreateModalOpen(false)}
              />
            </div>
            <div className="px-6 text-[12px] text-black">
              <div>
                <label htmlFor="wname" className="text-black text-[12px]">
                  Workspace Name
                </label>
                <input
                  type="text"
                  id="wname"
                  className="border border-gray-300 w-full mt-1.5 p-1.5 focus:outline-0 focus:ring-0 rounded-md"
                  value={wname}
                  onChange={(e) => setWName(e.target.value)}
                />
              </div>

              <div className="mt-2.5">
                <label htmlFor="client" className="text-black text-[12px]">
                  Client Name
                </label>
                <input
                  type="text"
                  id="client"
                  className="border border-gray-300 w-full mt-1.5 p-1.5 focus:outline-0 focus:ring-0 rounded-md"
                  value={client}
                  onChange={(e) => setClient(e.target.value)}
                />
              </div>
              <div className="mt-2.5">
                <label htmlFor="opponent" className="text-black text-[12px]">
                  Opponent
                </label>
                <input
                  type="text"
                  id="opponent"
                  className="border border-gray-300 w-full mt-1.5 p-1.5 focus:outline-0 focus:ring-0 rounded-md"
                  value={opponent}
                  onChange={(e) => setOpponent(e.target.value)}
                />
              </div>
              <div className="mt-2.5">
                <label htmlFor="casetype" className="text-black text-[12px]">
                  Case Type
                </label>
                <select
                  id="casetype"
                  className="mt-1.5 w-full p-1.5 focus:outline-1 focus:outline-gray-300 focus:ring-0 border border-gray-300 rounded-md"
                  value={caseType}
                  onChange={(e) => setCaseType(e.target.value)}
                >
                  <option value="">-- Select --</option>
                  <option value="Criminal">Criminal</option>
                  <option value="Fraud">Fraud</option>
                </select>
              </div>
              <div className="mt-2.5">
                <label htmlFor="area" className="text-black text-[12px]">
                  Area Of Law
                </label>
                <input
                  type="text"
                  id="area"
                  className="border border-gray-300 w-full mt-1.5 p-1.5 focus:outline-0 focus:ring-0 rounded-md"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                />
              </div>
              <div className="mt-2.5">
                <label htmlFor="date" className="text-black text-[12px]">
                  Date of Incident
                </label>
                <input
                  type="text"
                  id="date"
                  className="border border-gray-300 w-full mt-1.5 p-1.5 focus:outline-0 focus:ring-0 rounded-md"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="mt-2.5">
                <label htmlFor="representer" className="text-black text-[12px]">
                  Representing ( please select ){" "}
                  <span className="text-red-600 text-sm">*</span>
                </label>
                <div className="flex gap-2 mt-1">
                  <button
                    type="button"
                    className={`py-1 px-2 rounded-md border border-gray-300 cursor-pointer ${
                      representer === "Neha Kumari"
                        ? "bg-teal-950 text-white border-none"
                        : "bg-white text-black"
                    }`}
                    onClick={() => setRepresenter("Neha Kumari")}
                  >
                    Neha Kumari
                  </button>
                  <button
                    type="button"
                    onClick={() => setRepresenter("Raj Rani")}
                    className={`py-1 px-2 rounded-md border border-gray-300 cursor-pointer ${
                      representer === "Raj Rani"
                        ? "bg-teal-950 text-white border-none"
                        : "bg-white text-black"
                    }`}
                  >
                    Raj Rani
                  </button>
                </div>
              </div>
            </div>
            <div className="h-14 w-full border-t border-neutral-200 flex items-center justify-end px-5">
              <button
                className="text-gray-600 border hover:bg-gray-100 border-gray-300 px-2 py-1.5 text-[12px] rounded-md cursor-pointer"
                onClick={() => setCreateModalOpen(false)}
              >
                Go Back
              </button>
              <button
                className="text-white px-2 py-1.5 ml-2 text-[12px] hover:bg-teal-900 bg-teal-950 rounded-md cursor-pointer"
                onClick={handleSave}
              >
                Save Details
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
          <option value="crime">All types</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <select className="w-32 mr-3 p-1.5 border border-neutral-300 bg-white text-gray-800 text-[12px] rounded-md shadow-sm focus:outline-none focus:ring-0">
          <option value="crime">All status</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <button
          onClick={() => setCreateModalOpen(true)}
          className="bg-gray-900/80 hover:bg-gray-950 text-white px-2 py-1.5 rounded-md text-[12px]"
        >
          Create New Workspace
        </button>
      </div>
      <div className="mt-5 px-6 bg-white flex-1 w-full rounded-md shadow-[0_1px_5px_rgb(0,0,0,0.2)]">
        <div className="grid grid-cols-7 text-black text-center border-b border-gray-200 text-sm font-semibold">
          <div className="p-2">Workspace Name</div>
          <div className="p-2">Client</div>
          <div className="p-2">Opponent</div>
          <div className="p-2">Case</div>
          <div className="p-2">Area Of Law</div>
          <div className="p-2">Time of Incident</div>
          <div className="p-2">Representator</div>
        </div>
        {workspaces.map((workspace, idx) => (
          <div
            key={idx}
            className="grid grid-cols-7 text-gray-800 text-center border-b border-gray-200 text-sm"
          >
            <div className="p-2">{workspace.name}</div>
            <div className="p-2">{workspace.client}</div>
            <div className="p-2">{workspace.opponent}</div>
            <div className="p-2">
              <span className="p-1 bg-blue-200 text-blue-600 rounded-md">
                {workspace.caseType}
              </span>
            </div>
            <div className="p-2">{workspace.area}</div>
            <div className="p-2">{workspace.date}</div>
            <div className="p-2">{workspace.representer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
