"use client";

import { workPackageData } from "@/app/data/dummyData";
import Link from "next/link";
import Image from "next/image";

export default function WorkPackageOverview() {
  return (
    <div className="w-full lg:w-[50%] min-h-[320px] relative shadow-sm border border-slate-100 dark:border-slate-800 p-4 rounded-xl bg-white dark:bg-slate-900 transition-colors duration-300">
      
      <div className="flex gap-2 items-center mb-4">
        <p className="font-bold text-sm text-slate-900 dark:text-slate-100">Work Package Overview</p>
        <Image 
          src="/info.png" 
          alt="info" 
          width={15} 
          height={15}
          className="dark:opacity-70 dark:invert-[0.1]"
        />
      </div>

      <div className="pb-5">
        {workPackageData.map((pack) => {
          const isFinished = pack.status === "On Track";
          const statusColorClass = isFinished 
            ? "text-emerald-600 dark:text-emerald-400 font-medium" 
            : "text-sky-600 dark:text-sky-400 font-medium";

          return (
            <div
              key={pack.id}
              className="grid grid-cols-[auto_auto_1fr_auto] gap-4 py-2.5 border-b border-slate-100 dark:border-slate-800/60 text-[0.8rem] text-slate-700 dark:text-slate-300 items-center hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors duration-150"
            >
              <div className={`flex w-6 h-6 rounded-full items-center justify-center shrink-0 text-[10px] font-bold text-white shadow-sm ${pack.label}`}>
                <span>{pack.profile}</span>
              </div>
              
              <span className="font-semibold text-slate-900 dark:text-slate-100 whitespace-nowrap">
                {pack.package}
              </span>
              
              <span className="truncate pr-2 font-medium text-slate-600 dark:text-slate-300">
                {pack.title}
              </span>
              
              <span className={`text-right ${statusColorClass}`}>
                {pack.status}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex">
        <Link 
          className="text-sm hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300 absolute bottom-3 right-4 font-semibold text-sky-500 transition-colors" 
          href="#"
        >
          View WP Dashboard <span className="inline-block transform translate-y-[1px]">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}