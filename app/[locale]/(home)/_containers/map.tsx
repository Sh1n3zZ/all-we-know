import { PopsMap } from "@/app/[locale]/(home)/_components/pops-map"
import { Grid } from "@/components/ui/grid"

export function Map() {
  return (
    <section className="h-screen flex items-center justify-center px-6 md:px-12 lg:px-20">
      <div className="relative w-full h-full flex items-center justify-center">
        <Grid
          className="absolute inset-0 border-neutral-200 dark:border-neutral-800 [&>span]:border-neutral-200 dark:[&>span]:border-neutral-800"
          columns={14}
          rows={8}
          height="h-full"
          width="w-full"
          showPlusIcons={true}
        />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
          <PopsMap />
        </div>
      </div>
    </section>
  )
}
