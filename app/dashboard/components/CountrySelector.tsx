"use client"

import { useState } from "react"
import { ChevronDown, Globe } from "lucide-react"

const countries = ["Ghana", "Kenya", "Tanzania"] as const

type Country = (typeof countries)[number]

/** Country switcher rendered at the bottom of the sidebar. */
export function CountrySelector() {
  const [selected, setSelected] = useState<Country>("Ghana")
  const [open, setOpen] = useState(false)

  return (
    <div className="px-3 py-4 border-t border-slate-100">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Globe size={16} className="text-slate-400" />
          <span>{selected}</span>
        </div>
        <ChevronDown
          size={16}
          className={`text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="mt-1 flex flex-col gap-0.5">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => {
                setSelected(country)
                setOpen(false)
              }}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                selected === country
                  ? "bg-sky-50 text-sky-600 font-medium"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {country}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
