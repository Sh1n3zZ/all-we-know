import type { ReactNode } from "react"

import { Navbar } from "@/components/navbar"

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-dvh min-h-0 flex-col overflow-hidden">
      <Navbar />
      {children}
    </div>
  )
}