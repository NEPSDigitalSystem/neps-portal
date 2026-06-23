"use client"

import { Users, TrendingUp, AlertTriangle, ClipboardList, BarChart2, type LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  "users": Users,
  "trending-up": TrendingUp,
  "alert-triangle": AlertTriangle,
  "clipboard-list": ClipboardList,
  "bar-chart-2": BarChart2,
}

type StatCardProps = {
  title: string
  value: string
  subtitle: string
  icon: string
  iconColor: string
}

export function StatCard({ title, value, subtitle, icon, iconColor }: StatCardProps) {
  const Icon = iconMap[icon]

  const adaptiveIconClass = iconColor.includes("-600")
    ? `${iconColor} dark:${iconColor.replace("-600", "-400")}`
    : iconColor

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-800/80 flex flex-col gap-1 flex-1 min-w-0 transition-colors duration-300">
      
      <div className="flex justify-between items-start gap-2">
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide truncate">
          {title}
        </p>
        {Icon && (
          <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 transition-colors">
            <Icon className={`w-4 h-4 shrink-0 ${adaptiveIconClass}`} />
          </div>
        )}
      </div>

      <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 tabular-nums tracking-tight mt-1">
        {value}
      </p>

      <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mt-0.5 truncate">
        {subtitle}
      </p>

    </div>
  )
}