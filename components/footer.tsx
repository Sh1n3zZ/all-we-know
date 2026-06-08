import Link from "next/link"

import { Button } from "@/components/ui/button"
import { PingDot } from "@/components/ping-dot"

import { ThemeSwitcher } from "./theme-toggler"

export function Footer() {
  return (
    <footer className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="">
          <div className="grid gap-14">
            <div className="grid gap-3">
              <div className="space-y-3 text-sm">
                <span className="block font-medium">Social</span>
                <Link
                  href="#"
                  className="text-muted-foreground block duration-150 hover:text-cyan-500"
                >
                  <span className="flex items-center gap-2">Github</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-end justify-between gap-6 py-6">
          <Button
            className="cursor-pointer text-cyan-500 hover:text-cyan-500"
            variant={"ghost"}
          >
            <PingDot />
            All systems normal.
          </Button>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  )
}
