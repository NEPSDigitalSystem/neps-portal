"use client"

import { useState } from "react"
import { signIn, getSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")

    
  const result = await signIn("credentials", {
    email,
    password,
    redirect: false,
  })

  if (result?.error) {
    setError("Invalid email or password")
    setLoading(false)
  } else {
    const session = await getSession()
    const role = session?.user?.role

    if (role === "admin") router.push("/dashboard/admin")
    else if (role === "country-lead") router.push("/dashboard/country-lead")
    else router.push("/dashboard/enumerator")
  }

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-500 to-sky-400">
      <div className="bg-white px-10 py-12 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-slate-800 mb-2">Sign In</h1>
        <p className="text-slate-400 text-sm mb-8">Enter your credentials to access the platform</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-2.5 rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  )
}
