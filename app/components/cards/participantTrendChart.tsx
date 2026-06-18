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
    <div className="relative bg-white rounded-xl min-h-[300px] p-4 shadow-sm border border-gray-100 flex flex-col w-full lg:w-[50%]">
      <div className="flex justify-between items-center mb-3">
        <p className="text-sm font-semibold text-gray-800">Participant Trend Overview</p>
        <select className="bg-gray-50 border border-gray-200 text-xs rounded-lg px-1 py-1.2 text-gray-700 font-medium outline-none">
          <option>Last 8 Months</option>6
        </select>
      </div>

      <div className="h-52 w-full pb-5">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
              dy={8}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
              tickFormatter={(v: number) => `${(v / 1000).toFixed(1)}k`}
            />
            <Tooltip
              contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }}
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
              stroke="#2563eb"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="active"
              name="Active"
              stroke="#16a34a"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="dropout"
              name="Dropout"
              stroke="#dc2626"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex absolute bottom-2 right-4">
        <Link className="text-sm hover:text-blue-700 font-semibold text-blue-500" href="#">
          View Detailed Trends <span>&rarr;</span>
        </Link>
      </div>
    </div>
  )
}
