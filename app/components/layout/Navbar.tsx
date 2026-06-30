"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/60 backdrop-blur-xl dark:bg-zinc-950/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold">
          Trendline
        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link href="/">خانه</Link>
          <Link href="/signals">سیگنال‌ها</Link>
          <Link href="/dashboard">داشبورد</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="rounded-xl border border-white/10 bg-white/5 p-2"
          >
            {mounted &&
              (theme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              ))}
          </button>

          <Link
            href="/login"
            className="rounded-xl border border-white/20 px-4 py-2"
          >
            ورود
          </Link>
        </div>
      </div>
    </header>
  );
}