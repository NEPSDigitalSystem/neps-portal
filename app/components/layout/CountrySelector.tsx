"use client"

import { useState } from "react"
import { ChevronDown, Globe } from "lucide-react"

const countries = ["Ghana", "Kenya", "Tanzania"] as const

type Country = (typeof countries)[number]

export function CountrySelector() {
  const [selected, setSelected] = useState<Country>("Ghana")
  const [open, setOpen] = useState(false)

  return (
    <div className="px-3 py-4 border-t border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900 transition-colors duration-300">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Globe size={16} className="text-slate-400 dark:text-slate-500" />
          <span className="text-slate-900 dark:text-slate-200">{selected}</span>
        </div>
        <ChevronDown
          size={16}
          className={`text-slate-400 dark:text-slate-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="mt-1 flex flex-col gap-0.5 rounded-lg border border-transparent dark:border-slate-800/40 bg-transparent dark:bg-slate-950/20 p-0.5 transition-colors">
          {countries.map((country) => {
            const isCurrent = selected === country;
            
            const activeSelectionClasses = isCurrent
              ? "bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 font-semibold"
              : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/40";

            return (
              <button
                key={country}
                onClick={() => {
                  setSelected(country)
                  setOpen(false)
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-150 ${activeSelectionClasses}`}
              >
                {country}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}