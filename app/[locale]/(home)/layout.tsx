import type { ReactNode } from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-dvh flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}