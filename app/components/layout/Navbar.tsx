
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 glass border-b border-gray-200 dark:border-gray-800">
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
        >
          Trendline
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link 
            href="/" 
            className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium"
          >
            خانه
          </Link>
          <Link 
            href="/signals" 
            className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium"
          >
            سیگنال‌ها
          </Link>
          <Link 
            href="/dashboard" 
            className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium"
          >
            داشبورد
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-teal-50 dark:hover:bg-teal-950 transition-colors"
            title="تغییر تم"
            aria-label="Toggle theme"
          >
            {isMounted ? (
              theme === "dark" ? (
                <Sun size={18} className="text-amber-400" />
              ) : (
                <Moon size={18} className="text-gray-700" />
              )
            ) : (
              <div className="w-[18px] h-[18px]" />
            )}
          </button>

          {/* Login Button */}
          <Link
            href="/login"
            className="px-4 py-2 rounded-lg gradient-btn font-medium shadow-lg hover:shadow-xl transition-all active:scale-95"
          >
            ورود
          </Link>
        </div>
      </nav>
    </header>
  );
}