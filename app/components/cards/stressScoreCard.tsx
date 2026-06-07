"use client";

import Link from 'next/link';
import Image from 'next/image';
import { stressScoreData } from '@/app/data/dummyData';
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

export function StressScoreTrend() {
  return (
    <div className="w-full relative p-4 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-1.5 text-gray-900">
          <p className="text-sm font-semibold">Stress Score Trend (All Sites)</p>
          <Image src="/info.png" alt="info" width={15} height={15}/>
        </div>
        <select className="p-0 bg-gray-50 border border-gray-200 text-xs rounded-lg px-1 py-1.2 text-gray-700 font-medium outline-none">
          <option>Last 6 Months</option>
        </select>
      </div>

      <div className="min-h-[120px] h-50 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={stressScoreData}
            margin={{ top: 10, right: 0, left: -35, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#f0f0f0" />

            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#6b7280', fontSize: 13 }}
              dy={10}
            />

            <YAxis 
              domain={[0, 40]} 
              ticks={[0, 10, 20, 30, 40]}
              axisLine={false} 
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: 13 }}
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
              tick={{ fill: '#374151af', fontSize: 11, fontWeight: 500 }}
            />

            <Area
              type="monotone"
              dataKey="range"
              stroke="none"
              fill="#93c5fd"
              fillOpacity={0.7}
            />

            <Line
              yAxisId="right"
              type="monotone"
              dataKey="average"
              stroke="#2563eb"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="flex absolute bottom-2 right-4">
        <Link className="text-xs hover:text-blue-700 font-semibold text-blue-500" href="#">View Detailed Trends <span>&rarr;</span></Link>
      </div>
    </div>
  );
}