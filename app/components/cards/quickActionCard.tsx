"use client";

import { 
  UserPlus, 
  FilePlus2, 
  ShieldAlert, 
  FileSpreadsheet, 
  CheckCircle2, 
  Download 
} from "lucide-react";

// 1. Centralized actions array config for cleaner layout mapping
const ACTIONS_CONFIG = [
  { id: "add-participant", label: "Add Participant", icon: UserPlus, color: "text-emerald-500 dark:text-emerald-400" },
  { id: "new-form", label: "Start New Form", icon: FilePlus2, color: "text-sky-500 dark:text-sky-400" },
  { id: "safeguard", label: "Safeguarding Report", icon: ShieldAlert, color: "text-rose-500 dark:text-rose-400" },
  { id: "report", label: "Generate Report", icon: FileSpreadsheet, color: "text-indigo-500 dark:text-indigo-400" },
  { id: "data-check", label: "Data Quality Check", icon: CheckCircle2, color: "text-amber-500 dark:text-amber-400" },
  { id: "export", label: "Export Dataset", icon: Download, color: "text-violet-500 dark:text-violet-400" },
];

export function QuickActionCard() {
  return (
    <div className="w-full lg:w-[30%] bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 p-4 rounded-xl transition-colors duration-300">
      <p className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-4">
        Quick Actions
      </p>
      <div className="grid grid-cols-3 gap-2">
        {ACTIONS_CONFIG.map((action) => {
          const IconComponent = action.icon;
          
          return (
            <div
              key={action.id}
              className="flex flex-col justify-between items-center gap-2.5 p-3 text-center border border-slate-100 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 hover:border-slate-200 dark:hover:border-slate-700 cursor-pointer group transition-all duration-200"
            >
              <div className={`p-1 transition-transform duration-200 group-hover:scale-110 ${action.color}`}>
                <IconComponent 
                  size={22} 
                  strokeWidth={2}
                />
              </div>

              <p className="text-[11px] font-medium text-slate-600 dark:text-slate-400 leading-tight group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                {action.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}