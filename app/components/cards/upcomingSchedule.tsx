"use client";

import { upcomingSchedule } from "@/app/data/dummyData";
import Link from "next/link";
import { Calendar } from "lucide-react"; 

export default function UpcomingSchedule() {
  return (
    <div className="w-full lg:w-[35%] relative shadow-sm border border-slate-100 dark:border-slate-800 p-4 rounded-xl bg-white dark:bg-slate-900 transition-colors duration-300"> 
      <p className="font-bold mb-4 text-sm text-slate-900 dark:text-slate-100">
        Upcoming Schedule
      </p>
      <div className="pb-5">
        {upcomingSchedule.map((schedule, index, array) => (
          <div
            key={schedule.id}
            className="group"
          >
            <div className="grid grid-cols-[auto_1fr] gap-3 py-2.5 items-start">          
              <div className="p-1.5 bg-slate-50 dark:bg-slate-800/60 rounded-lg shrink-0 text-slate-500 dark:text-slate-400 group-hover:bg-sky-50 dark:group-hover:bg-sky-950/40 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-200">
                <Calendar 
                  size={16} 
                  strokeWidth={2.2} 
                />
              </div>
              <div className="min-w-0">
                <p className="text-slate-900 dark:text-slate-200 font-medium text-[0.8rem] leading-snug break-words">
                  {schedule.title}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-[0.75rem] mt-0.5 truncate">
                  {schedule.date} <span className="mx-1 text-slate-300 dark:text-slate-700">|</span> {schedule.location}
                </p>
              </div>
            </div>

            {index < array.length - 1 && (
              <div className="border-b border-slate-100 dark:border-slate-800/60" />
            )}
          </div>
        ))}
      </div>

      <div className="flex">
        <Link 
          className="text-sm hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300 absolute bottom-3 right-4 font-semibold text-sky-500 transition-colors" 
          href="#"
        >
          View Full Calendar <span className="inline-block transform translate-y-[1px]">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}