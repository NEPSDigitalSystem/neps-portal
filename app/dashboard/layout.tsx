import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { Sidebar } from "../components/layout/Sidebar"
import { TopNav } from "../components/layout/TopNav"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session) redirect("/login")

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Sidebar role={session.user.role} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopNav user={session.user} />
        <main className="flex-1 overflow-y-auto p-6 relative">
          {/* Background Grid Mesh */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-400/20 dark:bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-indigo-400/10 dark:bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10">
          

            {children}
          </div>
        </main>
      </div>
    </div>
  )
}