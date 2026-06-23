"use client"

import { participantTrendData as dummyParticipantTrendData } from "@/app/data/dummyData"
import Link from "next/link"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export function ParticipantTrendChart({ data = dummyParticipantTrendData }: { data?: unknown[] }) {
  return (
    <div className="relative bg-white dark:bg-slate-900 rounded-xl min-h-[300px] p-4 shadow-sm border border-gray-100 dark:border-slate-800 flex flex-col w-full lg:w-[50%] transition-colors duration-300">
      
      <div className="flex justify-between items-center mb-3">
        <p className="text-sm font-semibold text-gray-800 dark:text-slate-100">Participant Trend Overview</p>
        <select className="bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-800 text-xs rounded-lg px-2 py-1 text-gray-700 dark:text-slate-300 font-medium outline-none transition-colors cursor-pointer">
          <option>Last 8 Months</option>
        </select>
      </div>

      <div className="h-52 w-full pb-5 select-none">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
            
            <CartesianGrid vertical={false} stroke="currentColor" className="text-slate-100 dark:text-slate-800/50" />
            
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "currentColor", fontSize: 12 }}
              className="text-gray-400 dark:text-slate-500"
              dy={8}
            />
            
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "currentColor", fontSize: 12 }}
              className="text-gray-400 dark:text-slate-500"
              tickFormatter={(v: number) => `${(v / 1000).toFixed(1)}k`}
            />
            
            <Tooltip
              contentStyle={{ 
                fontSize: 12, 
                borderRadius: 8,
                backgroundColor: 'var(--tooltip-bg, #ffffff)', 
                borderColor: 'var(--tooltip-border, #e2e8f0)',
                color: 'var(--tooltip-text, #0f172a)'
              }}
              itemStyle={{ fontSize: 12 }}
              wrapperStyle={{ outline: 'none' }}
            />
            
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
            />
            
            <Line
              type="monotone"
              dataKey="enrolled"
              name="Enrolled"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="active"
              name="Active"
              stroke="#10b981"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="dropout"
              name="Dropout"
              stroke="#f43f5e"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex absolute bottom-3 right-4">
        <Link className="text-sm hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300 font-semibold text-sky-500 transition-colors" href="#">
          View Detailed Trends <span className="inline-block transform translate-y-[1px]">&rarr;</span>
        </Link>
      </div>
    </div>
  )
}