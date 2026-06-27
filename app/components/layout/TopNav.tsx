"use client"

import { Bell, Search } from "lucide-react"
import { ThemeToggle } from "../ThemeToggle"

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

export function TopNav({ user }: { user: User }) {
  return (
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-6 flex items-center justify-between gap-4 transition-colors duration-300">
      
      <div className="flex-1 max-w-md">
        <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 transition-colors duration-300">
          <Search size={16} className="text-slate-400 dark:text-slate-500 shrink-0" />
          <input
            type="text"
            placeholder="Search participants, forms, reports..."
            className="bg-transparent text-sm text-slate-700 dark:text-slate-300 placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button className="relative p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-sky-500 flex items-center justify-center text-white text-sm font-semibold shrink-0">
            {getInitials(user.name)}
          </div>
          <div className="flex flex-col hidden sm:flex">
            <span className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-tight">
              {user.name ?? "Unknown User"}
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500 leading-tight">
              {roleLabel[user.role] ?? user.role}
            </span>
          </div>
        </div>

      </div>
    </header>
  )
}