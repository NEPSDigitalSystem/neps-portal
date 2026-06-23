// src/app/components/AlertCard.tsx
import { alerts as dummyAlerts } from "@/app/data/dummyData";
import { dangerAssets } from "@/app/utils/dangerConfig";
import Image from "next/image";

export function AlertCard({ alertsData = dummyAlerts }: { alertsData?: unknown[] }) {
  return (
    <div className="bg-white dark:bg-slate-900 w-full lg:w-[35%] shadow-sm border border-slate-100 dark:border-slate-800 p-3 rounded-xl transition-colors duration-300">
      
      <div className="flex items-center justify-between mb-3">
        <p className="font-bold text-sm text-slate-900 dark:text-slate-100">Critical Alerts</p>
        <a href="#" className="text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300 text-sm font-medium transition-colors">
          View All
        </a>
      </div>

      <div className="border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-950/40 transition-colors duration-300">
        {(alertsData as typeof dummyAlerts).map((alert, index, array) => {
          const icon = dangerAssets[alert.severity as keyof typeof dangerAssets] || dangerAssets.low;

          return (
            <div key={alert.id}>
              <div className="flex gap-3 items-start p-3 hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors">
                <Image
                  src={icon}
                  alt={alert.severity}
                  width={24}
                  height={24}
                  className="shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-slate-900 dark:text-slate-200 text-[0.8rem] font-medium leading-normal break-words">
                    {alert.title}
                  </p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-slate-400 dark:text-slate-500">
                      {alert.date}
                    </span>
                    <a href="#" className="text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300 text-xs font-medium ml-2 transition-colors">
                      View
                    </a>
                  </div>
                </div>
              </div>

              {/* Prevent trailing separator border on the final item */}
              {index < array.length - 1 && (
                <div className="border-b border-slate-100 dark:border-slate-800" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}