import { Hero } from "@/app/[locale]/(home)/_containers/hero"
import { Map } from "@/app/[locale]/(home)/_containers/map"
import { Partner } from "@/app/[locale]/(home)/_containers/partner"
import { HighAvailability } from "@/app/[locale]/(home)/_containers/high-availability"

export default async function Home() {
  return (
    <main className="flex flex-1 flex-col gap-20">
      <Hero />
      <Partner />
      <Map />
      <HighAvailability />
    </main>
  )
}
