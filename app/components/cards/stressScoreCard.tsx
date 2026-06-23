"use client";

import Link from 'next/link';
import Image from 'next/image';
import { stressScoreData as dummyStressScoreData } from '@/app/data/dummyData';
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

export function StressScoreTrend({ data = dummyStressScoreData }: { data?: unknown[] }) {
  return (
    <div className="w-full lg:w-[50%] min-h-[300px] relative p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 transition-colors duration-300">    
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-1.5 text-slate-900 dark:text-slate-100">
          <p className="text-sm font-semibold">Stress Score Trend (All Sites)</p>
          <Image 
            src="/info.png" 
            alt="info" 
            width={15} 
            height={15}
            className="dark:opacity-70 dark:invert-[0.1]"
          />
        </div>
        <select className="bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-800 text-xs rounded-lg px-2 py-1 text-gray-700 dark:text-slate-300 font-medium outline-none transition-colors cursor-pointer">
          <option>Last 6 Months</option>
        </select>
      </div>

      <div className="min-h-[120px] h-50 w-full pb-5 select-none">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 10, right: 0, left: -35, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="currentColor" className="text-slate-100 dark:text-slate-800/40" />

            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'currentColor', fontSize: 13 }}
              className="text-slate-400 dark:text-slate-500"
              dy={10}
            />

            <YAxis 
              domain={[0, 40]} 
              ticks={[0, 10, 20, 30, 40]}
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'currentColor', fontSize: 13 }}
              className="text-slate-400 dark:text-slate-500"
            />

            <YAxis 
              yAxisId="right" 
              orientation="right"
              domain={[0, 40]}
              width={70}
              axisLine={false}
              tickLine={false}
              ticks={[5, 20, 35]}
              tickFormatter={(value: number) => {
                if (value === 5) return 'Low';
                if (value === 20) return 'Moderate';
                if (value === 35) return 'High';
                return '';
              }}
              tick={{ fill: 'currentColor', fontSize: 11, fontWeight: 500 }}
              className="text-slate-600 dark:text-slate-400"
            />
            
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                fontSize: "12px",
                backgroundColor: 'var(--tooltip-bg, #ffffff)', 
                borderColor: 'var(--tooltip-border, #e2e8f0)',
                color: 'var(--tooltip-text, #0f172a)'
              }}
              wrapperStyle={{ outline: 'none' }}
              formatter={(value, name) => {
                if (name === "range" && Array.isArray(value)) {
                  return [`[${value[0]} - ${value[1]}]`, "Stress Range"];
                }
                if (name === "average") {
                  return [value, "Stress Score Average"];
                }
                return [value, name];
              }}
              labelFormatter={(label) => `Month: ${label}`}
            />

            <Area
              type="monotone"
              dataKey="range"
              stroke="none"
              fill="currentColor"
              className="text-sky-400/50 dark:text-sky-500/20"
              fillOpacity={1}
            />

            <Line
              yAxisId="right"
              type="monotone"
              dataKey="average"
              stroke="#3b82f6"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="flex absolute bottom-3 right-4">
        <Link className="text-sm hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300 font-semibold text-sky-500 transition-colors" href="#">
          View Detailed Trends <span className="inline-block transform translate-y-[1px]">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}