"use client";

import { dataCollection } from "@/app/data/dummyData";
import Link from "next/link";
import LineLoader from "../ui/lineLoader";
import Image from "next/image";

export default function DataCollectionStatus() {
  return (
    <div className="w-full lg:w-[50%] relative shadow-sm border border-slate-100 dark:border-slate-800 p-4 rounded-xl bg-white dark:bg-slate-900 transition-colors duration-300">
      
      <div className="flex gap-2 items-center mb-3">
        <p className="font-bold text-sm text-slate-900 dark:text-slate-100">Data Collection Status</p>
        <Image 
          src="/info.png" 
          alt="info" 
          width={15} 
          height={15} 
          className="dark:opacity-80 dark:invert-[0.1]" // Keeps info icon visible and balanced on dark grids
        />
      </div>

      <div className="grid grid-cols-[1.2fr_0.8fr_0.5fr_0.5fr] text-[0.8rem] border-b border-slate-200 dark:border-slate-800 py-1.5 font-semibold text-slate-900 dark:text-slate-200 transition-colors duration-300">
        <span>Site</span>
        <span>Form Completion</span>
        <span className="text-center">Pending</span>
        <span className="text-center">Overdue</span>
      </div>

      <div className="pb-3">
        {dataCollection.map((status) => (
          <div
            key={status.id}
            className="grid grid-cols-[1.2fr_0.8fr_0.5fr_0.5fr] py-1.5 border-b border-slate-100 dark:border-slate-800/60 text-[0.8rem] text-slate-700 dark:text-slate-300 items-center hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors duration-150"
          >
            <span className="font-medium text-slate-900 dark:text-slate-100">{status.site}</span>
            <div className="flex items-center gap-2 w-full">
              {/* Ensure your LineLoader component uses tailwind tokens internally so its track changes clean! */}
              <LineLoader percent={status.forms_completion} />
              <span className="tabular-nums font-medium">{status.forms_completion}%</span>
            </div>
            <span className="text-center tabular-nums">{status.pending}</span>
            <span className="text-center tabular-nums text-rose-600 dark:text-rose-400 font-medium">
              {status.overdue}
            </span>
          </div>
        ))}
      </div>

      <div className="flex pt-4">
        <Link 
          className="text-sm hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300 absolute bottom-3 right-4 font-semibold ml-auto text-sky-500 transition-colors" 
          href="#"
        >
          View All Sites <span className="inline-block transform translate-y-[1px]">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}