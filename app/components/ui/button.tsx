import { ButtonHTMLAttributes } from "react";
import { cn } from "@/src/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-xl bg-blue-600 px-5 py-3 text-white font-medium transition hover:bg-blue-700 disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}