import { cn } from "@/lib/utils";

export function AnimatedGradientText({
  children,
  className,
  speed = 1,
  colorFrom = "#34d399",
  colorTo = "#3b82f6", // Use a more distinct color for better animation
  ...props
}) {
  return (
    <span
      style={{
        "--bg-size": `${speed * 300}%`,
        "--color-from": colorFrom,
        "--color-to": colorTo,
      }}
      className={cn(
        `inline animate-gradient bg-gradient-to-r from-[var(--color-from)] via-[var(--color-to)] to-[var(--color-from)] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
