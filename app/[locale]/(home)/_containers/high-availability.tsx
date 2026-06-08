"use client"

import { BentoGrid } from "@/components/ui/bento-grid"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { FailoverNotifications } from "@/app/[locale]/(home)/_components/failover-notification"
import { TrendChart } from "@/app/[locale]/(home)/_components/trend-chart"
import { ProtectionProvided } from "@/app/[locale]/(home)/_components/protection-provided"
import { StreamingTransmissionOptimization } from "@/app/[locale]/(home)/_components/streaming-transmission-optimization"
import { cn } from "@/lib/utils"

export function HighAvailability() {

    return (
        <section className="relative flex min-h-screen items-center overflow-hidden">
            <AnimatedGridPattern
                numSquares={30}
                className={cn(
                    "[mask-image:linear-gradient(to_bottom,transparent_0%,white_40%),radial-gradient(1000px_circle_at_center,white,transparent)]",
                    "[mask-composite:intersect]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                )}
            />
            <div className="container relative z-10 mx-auto px-4 py-8 md:px-6 lg:px-8">
                <BentoGrid>
                    <TrendChart className="col-span-3 lg:col-span-2" />
                    <ProtectionProvided className="col-span-3 lg:col-span-1" />
                    <StreamingTransmissionOptimization className="col-span-3 lg:col-span-1" />
                    <FailoverNotifications className="col-span-3 lg:col-span-2" />
                </BentoGrid>
            </div>
        </section>
    )
}
