import { Hero } from "@/app/[locale]/(home)/_containers/hero"

export default async function Home() {
  return (
    <main className="flex min-h-0 flex-1 flex-col">
      <Hero />
    </main>
  )
}
