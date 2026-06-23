"use client";

import { recentActivities } from "@/app/data/dummyData";
import Link from "next/link";

export default function RecentActivityTable() {
  return (
    <div className="w-full lg:w-[80%] min-h-[320px] relative shadow-sm border border-slate-100 dark:border-slate-800 p-4 rounded-xl bg-white dark:bg-slate-900 transition-colors duration-300">
      
      <p className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-3">
        Recent Activity
      </p>

      <div className="grid grid-cols-[1fr_1.5fr_1fr_0.8fr] text-[0.8rem] border-b border-slate-200 dark:border-slate-800 py-2 font-semibold text-slate-900 dark:text-slate-200 transition-colors duration-300">
        <span>User</span>
        <span>Action</span>
        <span>Module</span>
        <span>Time</span>
      </div>

      <div className="pb-5">
        {recentActivities.map((activity) => (
          <div
            key={activity.id}
            className="grid grid-cols-[1fr_1.5fr_1fr_0.8fr] py-2.5 border-b border-slate-100 dark:border-slate-800/60 text-[0.8rem] text-slate-600 dark:text-slate-400 items-center hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors duration-150"
          >
            <span className="font-medium text-slate-900 dark:text-slate-200 truncate pr-2">
              {activity.user}
            </span>
            <span className="text-slate-700 dark:text-slate-300 truncate pr-2">
              {activity.action}
            </span>
            <span className="inline-flex items-center text-xs font-medium text-slate-500 dark:text-slate-400">
              {activity.module}
            </span>
            <span className="text-slate-400 dark:text-slate-500 tabular-nums">
              {activity.time}
            </span>
          </div>
        ))}
      </div>

      <div className="flex absolute bottom-3 right-4">
        <Link 
          className="text-sm hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300 font-semibold text-sky-500 transition-colors" 
          href="#"
        >
          View All Activities <span className="inline-block transform translate-y-[1px]">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}