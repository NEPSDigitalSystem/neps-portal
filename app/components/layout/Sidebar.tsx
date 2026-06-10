"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  TrendingUp,
  Brain,
  Zap,
  Shield,
  BarChart2,
  Download,
  UserCog,
  FileText,
  Settings,
  ScrollText,
  ShieldCheck,
  GitBranch,
  HeartPulse,
  FlaskConical,
} from "lucide-react"
import { CountrySelector } from "./CountrySelector"

type Role = "admin" | "country-lead" | "enumerator"


type NavItem = {
  label: string
  href: string
  icon: React.ReactNode
}

type NavSection = {
  title?: string
  items: NavItem[]
}

const navByRole: Record<Role, NavSection[]> = {
  admin: [
    {
      items: [
        { label: "Overview", href: "/dashboard/admin", icon: <LayoutDashboard size={18} /> },
        { label: "Participants", href: "/dashboard/admin/participants", icon: <Users size={18} /> },
        { label: "Data Collection", href: "/dashboard/admin/data-collection", icon: <ClipboardList size={18} /> },
        { label: "Longitudinal Monitoring", href: "/dashboard/admin/monitoring", icon: <TrendingUp size={18} /> },
        { label: "Biological & Neuro Data", href: "/dashboard/admin/biological", icon: <Brain size={18} /> },
        { label: "Interventions (WP6)", href: "/dashboard/admin/interventions", icon: <Zap size={18} /> },
        { label: "Safeguarding", href: "/dashboard/admin/safeguarding", icon: <Shield size={18} /> },
        { label: "Reporting & Analytics", href: "/dashboard/admin/reports", icon: <BarChart2 size={18} /> },
        { label: "Export Data", href: "/dashboard/admin/export", icon: <Download size={18} /> },
      ],
    },
    {
      title: "Admin",
      items: [
        { label: "User Management", href: "/dashboard/admin/users", icon: <UserCog size={18} /> },
        { label: "REDCap Forms", href: "/dashboard/admin/redcap-forms", icon: <FileText size={18} /> },
        { label: "System Settings", href: "/dashboard/admin/settings", icon: <Settings size={18} /> },
        { label: "Audit Logs", href: "/dashboard/admin/audit-logs", icon: <ScrollText size={18} /> },
        { label: "Data Quality", href: "/dashboard/admin/data-quality", icon: <ShieldCheck size={18} /> },
        { label: "Workflows", href: "/dashboard/admin/workflows", icon: <GitBranch size={18} /> },
      ],
    },
  ],
  "country-lead": [
    {
      items: [
        { label: "Overview", href: "/dashboard/country-lead", icon: <LayoutDashboard size={18} /> },
        { label: "Participants", href: "/dashboard/country-lead/participants", icon: <Users size={18} /> },
        { label: "Monthly Monitoring", href: "/dashboard/country-lead/monitoring", icon: <HeartPulse size={18} /> },
        { label: "Risk & Safeguarding", href: "/dashboard/country-lead/risk", icon: <Shield size={18} /> },
        { label: "MEAL & Operations", href: "/dashboard/country-lead/meal", icon: <FlaskConical size={18} /> },
        { label: "Reports", href: "/dashboard/country-lead/reports", icon: <BarChart2 size={18} /> },
      ],
    },
  ],
  enumerator: [
    {
      items: [
        { label: "Overview", href: "/dashboard/enumerator", icon: <LayoutDashboard size={18} /> },
        { label: "Participants", href: "/dashboard/enumerator/participants", icon: <Users size={18} /> },
        { label: "Form Launcher", href: "/dashboard/enumerator/form-launcher", icon: <ClipboardList size={18} /> },
        { label: "Form Tracker", href: "/dashboard/enumerator/form-tracker", icon: <BarChart2 size={18} /> },
      ],
    },
  ],
}

/** Sidebar navigation rendered based on the authenticated user's role. */
export function Sidebar({ role }: { role: string }) {
  const pathname = usePathname()
  const sections = navByRole[role as Role] ?? navByRole.enumerator

  return (
    <aside className="w-65 bg-white border-r border-slate-100 flex flex-col">
      <div className="px-6 py-5 border-b border-slate-100">
        <span className="text-lg font-bold text-slate-800">NEPS Digital</span>
      </div>

      <nav className="flex-1 px-3 py-4 flex flex-col gap-4 overflow-y-auto">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col gap-1">
            {section.title && (
              <span className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                {section.title}
              </span>
            )}
            {section.items.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? "bg-sky-50 text-sky-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              )
            })}
          </div>
        ))}
      </nav>

      <CountrySelector />
    </aside>
  )
}
