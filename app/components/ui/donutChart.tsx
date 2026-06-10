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

  const malePct = (male / total) * 100;
  const femalePct = (female / total) * 100;
  const otherPct = (other / total) * 100;

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
    <div className="pb-5 grid grid-cols-[1.3fr_2fr] text-[0.8rem] text-gray-900">
      <svg width="90%" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="12"
        />

        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#7f72f7"
          strokeWidth="12"
          strokeDasharray={`${animated ? maleLength : 0} ${circumference}`}
          transform="rotate(-90 50 50)"
          className="transition-all duration-1000"
        />

        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#c3b7f8"
          strokeWidth="12"
          strokeDasharray={`${animated ? femaleLength : 0} ${circumference}`}
          strokeDashoffset={-maleLength}
          transform="rotate(-90 50 50)"
          className="transition-all duration-1000"
        />

        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#e2e1fa"
          strokeWidth="12"
          strokeDasharray={`${animated ? otherLength : 0} ${circumference}`}
          strokeDashoffset={-(maleLength + femaleLength)}
          transform="rotate(-90 50 50)"
          className="transition-all duration-1000"
        />
      </svg>
      <div>
      <div className="grid grid-cols-[1.4fr_0.5fr_0.2fr] py-1 text_xs">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#7f72f7]"></span>
          Male
        </div>
        <p className="text-xs">{malePct.toFixed(0)}%</p>
        <p className="text-xs">({male})</p>
      </div>
      <div className="grid grid-cols-[1.4fr_0.5fr_0.2fr] py-1 text_xs">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#c3b7f8]"></span>
          Female
        </div>
        <p className="text-xs">{femalePct.toFixed(0)}%</p>
        <p className="text-xs">({female})</p>
      </div>
      <div className="grid grid-cols-[1.4fr_0.5fr_0.2fr] py-1 text_xs">
        <div className="flex pb-3 border-b border-gray-300 items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#e2e1fa]"></span>
          Other
        </div>
        <p className="text-xs border-b border-gray-300">{otherPct.toFixed(0)}%</p>
        <p className="text-xs border-b border-gray-300">({other})</p>
      </div>
      <div className="flex justify-between mt-3 py-1 text_xs">
        <p>Age (Mean +/- SD)</p>
        <p className="text-xs">16.8 +/- 29</p>
      </div>
      <div className="flex justify-between py-1 text_xs">
        <p>Range</p>
        <p className="text-xs">10 - 24 years</p>
      </div>
      </div>
    </div>
  );
}