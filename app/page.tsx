import Link from "next/link";
import { Typewriter } from "./components/ui/Typewriter"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-slate-500 to-sky-400">
      <div className="flex flex-col items-center gap-4 bg-white/15 backdrop-blur-sm px-20 py-16 rounded-2xl">
        <Typewriter className="animate-fade-up text-7xl font-bold text-white tracking-tight" text="NEPS Digital" speed={150} />
        <p className="animate-fade-up-delay text-sky-100 text-lg">
          Monitoring youth mental health across Africa
        </p>
        <Link
          href="/login"
          className="animate-fade-up-delay-2 mt-4 px-8 py-3 bg-white text-slate-700 font-medium rounded-full hover:bg-sky-50 transition-colors"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}