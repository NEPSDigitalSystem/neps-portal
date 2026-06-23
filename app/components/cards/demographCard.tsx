"use client";

import Image from "next/image";
import DonutChart from "../ui/donutChart";
import Link from "next/link";

export function DemoGraphics() {
  return (
    <div className="w-full lg:w-[50%] relative shadow-sm border border-slate-100 dark:border-slate-800 p-4 rounded-xl bg-white dark:bg-slate-900 transition-colors duration-300">
      
      <div className="flex gap-2 items-center mb-8">
        <p className="font-bold text-sm text-slate-900 dark:text-slate-100">
          Cohort Demographics (Baseline)
        </p>
        <Image 
          src="/info.png" 
          alt="info" 
          width={15} 
          height={15}
          className="dark:opacity-70 dark:invert-[0.1]"
        />
      </div>
      <DonutChart male={3202} female={2666} other={500} />

      <div className="flex">
        <Link 
          className="text-sm hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300 absolute bottom-3 right-4 font-semibold ml-auto text-sky-500 transition-colors" 
          href="#"
        >
          View Demographics <span className="inline-block transform translate-y-[1px]">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}