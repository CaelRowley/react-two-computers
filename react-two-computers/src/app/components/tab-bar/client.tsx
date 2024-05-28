"use client";

import React from "react";

export function TabBarClient(props: {
  a: React.ReactNode;
  b: React.ReactNode;
  c: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = React.useState<"a" | "b" | "c">("a")

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-row gap-4">
        <button
          onClick={() => setActiveTab("a")}
          className={`text-2xl font-bold bg-red-500 px-4 py-2 rounded-lg
          ${activeTab === "a" ? "text-white bg-red-200" : ""}
        `}
        >
          A
        </button>
        <button
          onClick={() => setActiveTab("b")}
          className={`text-2xl font-bold bg-red-500 px-4 py-2 rounded-lg
          ${activeTab === "b" ? "text-white bg-red-200" : ""}
        `}
        >
          B
        </button>
        <button
          onClick={() => setActiveTab("c")}
          className={`text-2xl font-bold bg-red-500 px-4 py-2 rounded-lg
          ${activeTab === "c" ? "text-white bg-red-200" : ""}
        `}
        >
          C
        </button>
      </div>
      {activeTab === "a" && props.a}
      {activeTab === "b" && props.b}
      {activeTab === "c" && props.c}
    </div>
  )
}