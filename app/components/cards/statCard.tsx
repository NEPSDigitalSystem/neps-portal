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

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col gap-1 flex-1 min-w-0">
      <div className="flex justify-between items-start">
        <p className="text-xs text-gray-900 font-medium">{title}</p>
        {Icon && <Icon className={`w-4 h-4 shrink-0 ${iconColor}`} />}
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-xs text-gray-900">{subtitle}</p>
    </div>
  )
}
