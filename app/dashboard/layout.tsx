import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { Sidebar } from "./components/Sidebar"
import { TopNav } from "./components/TopNav"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session) redirect("/login")

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar role={session.user.role} />
      <div className="flex flex-col flex-1 overflow-hidden">

        <TopNav user={session.user} />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
