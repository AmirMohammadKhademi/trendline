import { ReactNode } from "react";
import { cn } from "@/src/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glass" | "elevated";
}

export default function Card({ children, className, variant = "default" }: CardProps) {
  const variantClasses = {
    default:
      "bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-md dark:shadow-lg rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
    glass:
      "glass rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
    elevated:
      "bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl p-6 shadow-lg dark:shadow-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2",
  };

  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-300",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </div>
  );
}