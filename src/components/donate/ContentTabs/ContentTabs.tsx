"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type Tab = {
  label: string;
  content: string;
};

type ContentTabsProps = {
  tabs: Tab[];
};

export default function ContentTabs({ tabs }: ContentTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex gap-6 border-b border-gray-200 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`pb-3 text-sm font-medium transition-colors cursor-pointer ${
              activeTab === index
                ? "text-gray-800 border-b-2 border-gray-800"
                : "text-zinc-400 hover:text-gray-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-zinc-600 text-base leading-7"
          >
            {tabs[activeTab].content}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}