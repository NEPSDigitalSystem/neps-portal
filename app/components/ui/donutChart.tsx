"use client";

import { useEffect, useState } from "react";

interface DonutChartProps {
  male: number;
  female: number;
  other: number;
}

export default function DonutChart({
  male,
  female,
  other,
}: DonutChartProps) {
  const [animated, setAnimated] = useState(false);

  const total = male + female + other;

  const malePct = total > 0 ? (male / total) * 100 : 0;
  const femalePct = total > 0 ? (female / total) * 100 : 0;
  const otherPct = total > 0 ? (other / total) * 100 : 0;

  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  const maleLength = (malePct / 100) * circumference;
  const femaleLength = (femalePct / 100) * circumference;
  const otherLength = (otherPct / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pb-5 grid grid-cols-[1.3fr_2fr] gap-4 text-[0.8rem] text-slate-700 dark:text-slate-300 transition-colors duration-300 items-center">
      
      {/* SVG Donut Canvas */}
      <svg width="100%" viewBox="0 0 100 100" className="overflow-visible">
        {/* Base Track Background Ring */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="currentColor"
          className="text-slate-100 dark:text-slate-800"
          strokeWidth="12"
        />

        {/* Male Segment */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#6366f1" /* Vibrant Indigo-500 */
          strokeWidth="12"
          strokeDasharray={`${animated ? maleLength : 0} ${circumference}`}
          transform="rotate(-90 50 50)"
          className="transition-all duration-1000 ease-out"
        />

        {/* Female Segment */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#a5b4fc" /* Indigo-300 */
          strokeWidth="12"
          strokeDasharray={`${animated ? femaleLength : 0} ${circumference}`}
          strokeDashoffset={-maleLength}
          transform="rotate(-90 50 50)"
          className="transition-all duration-1000 ease-out"
        />

        {/* Other Segment */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#e0e7ff" /* Indigo-100 for Light Mode */
          strokeWidth="12"
          strokeDasharray={`${animated ? otherLength : 0} ${circumference}`}
          strokeDashoffset={-(maleLength + femaleLength)}
          transform="rotate(-90 50 50)"
          className="transition-all duration-1000 ease-out dark:stroke-indigo-950" /* Muted Indigo background fill for Dark Mode */
        />
      </svg>

      {/* Metrics Legend Panel */}
      <div className="flex flex-col gap-1">
        
        {/* Male Row */}
        <div className="grid grid-cols-[1.2fr_0.5fr_auto] py-1 items-center">
          <div className="flex items-center gap-2 text-slate-900 dark:text-slate-200 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6366f1] shrink-0"></span>
            <span>Male</span>
          </div>
          <p className="font-semibold text-slate-800 dark:text-slate-300">{malePct.toFixed(0)}%</p>
          <p className="text-slate-400 dark:text-slate-500">({male})</p>
        </div>

        {/* Female Row */}
        <div className="grid grid-cols-[1.2fr_0.5fr_auto] py-1 items-center">
          <div className="flex items-center gap-2 text-slate-900 dark:text-slate-200 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-[#a5b4fc] shrink-0"></span>
            <span>Female</span>
          </div>
          <p className="font-semibold text-slate-800 dark:text-slate-300">{femalePct.toFixed(0)}%</p>
          <p className="text-slate-400 dark:text-slate-500">({female})</p>
        </div>

        {/* Other Row */}
        <div className="grid grid-cols-[1.2fr_0.5fr_auto] py-1 pb-3 border-b border-slate-100 dark:border-slate-800/80 items-center">
          <div className="flex items-center gap-2 text-slate-900 dark:text-slate-200 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e0e7ff] dark:bg-indigo-950 shrink-0"></span>
            <span>Other</span>
          </div>
          <p className="font-semibold text-slate-800 dark:text-slate-300">{otherPct.toFixed(0)}%</p>
          <p className="text-slate-400 dark:text-slate-500">({other})</p>
        </div>

        {/* Secondary Context Information Metadata */}
        <div className="flex justify-between mt-2 py-0.5 text-[0.75rem]">
          <p className="text-slate-400 dark:text-slate-500 font-medium">Age (Mean ± SD)</p>
          <p className="text-slate-700 dark:text-slate-300 font-semibold tabular-nums">16.8 ± 2.9</p>
        </div>
        
        <div className="flex justify-between py-0.5 text-[0.75rem]">
          <p className="text-slate-400 dark:text-slate-500 font-medium">Range</p>
          <p className="text-slate-700 dark:text-slate-300 font-semibold tabular-nums">10 - 24 years</p>
        </div>

      </div>
    </div>
  );
} 