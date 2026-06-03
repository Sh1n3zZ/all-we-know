"use client"

import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "@wrksz/themes/client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const THEME_CYCLE = ["light", "dark", "system"] as const

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const mode = theme ?? "system"

  function cycleTheme() {
    const current = theme ?? "system"
    const idx = THEME_CYCLE.indexOf(
      current as (typeof THEME_CYCLE)[number],
    )
    const safeIdx = idx === -1 ? 0 : idx
    const next = THEME_CYCLE[(safeIdx + 1) % THEME_CYCLE.length]
    setTheme(next)
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className="relative"
      onClick={cycleTheme}
    >
      <Sun
        className={cn(
          "absolute h-[1.2rem] w-[1.2rem] transition-all",
          mode === "light"
            ? "scale-100 rotate-0 opacity-100"
            : "pointer-events-none scale-0 -rotate-90 opacity-0",
        )}
        aria-hidden
      />
      <Moon
        className={cn(
          "absolute h-[1.2rem] w-[1.2rem] transition-all",
          mode === "dark"
            ? "scale-100 rotate-0 opacity-100"
            : "pointer-events-none scale-0 rotate-90 opacity-0",
        )}
        aria-hidden
      />
      <Monitor
        className={cn(
          "absolute h-[1.2rem] w-[1.2rem] transition-all",
          mode === "system"
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-0 opacity-0",
        )}
        aria-hidden
      />
    </Button>
  )
}