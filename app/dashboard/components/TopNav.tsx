"use client"

import { Bell, Search } from "lucide-react"

type User = {
  name?: string | null
  email?: string | null
  role: string
}

const roleLabel: Record<string, string> = {
  admin: "System Administrator",
  pi: "PI / Consortium Lead",
  "country-lead": "Country Lead",
  enumerator: "Enumerator",
}

function getInitials(name: string | null | undefined): string {
  if (!name) return "?"
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

/** Top navigation bar showing search, notifications, and the authenticated user. */
export function TopNav({ user }: { user: User }) {
  return (
    <header className="h-16 bg-white border-b border-slate-100 px-6 flex items-center justify-between gap-4">
      <div className="flex-1 max-w-md">
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
          <Search size={16} className="text-slate-400 shrink-0" />
          <input
            type="text"
            placeholder="Search participants, forms, reports..."
            className="bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-lg hover:bg-slate-50 transition-colors">
          <Bell size={20} className="text-slate-500" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-sky-500 flex items-center justify-center text-white text-sm font-semibold">
            {getInitials(user.name)}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-slate-800 leading-tight">
              {user.name ?? "Unknown User"}
            </span>
            <span className="text-xs text-slate-400 leading-tight">
              {roleLabel[user.role] ?? user.role}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
