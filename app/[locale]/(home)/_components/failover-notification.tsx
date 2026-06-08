"use client"

import { cn } from "@/lib/utils"
import { AnimatedList } from "@/components/ui/animated-list"
import { useTranslations } from "next-intl"
import { GlobeCheck, Activity, TicketCheck, Replace, LucideIcon, BellIcon } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

interface Item {
  name: string
  description: string
  icon: LucideIcon
  time: string
}

function useNotifications() {
  const t = useTranslations("failoverNotifications")

  const notifications = [
    {
      name: t("nodeOnline"),
      description: t("description"),
      time: t("timeAgo.minutes", { count: 15 }),
      icon: GlobeCheck,
    },
    {
      name: t("trafficRerouted"),
      description: t("description"),
      time: t("timeAgo.minutes", { count: 10 }),
      icon: Activity,
    },
    {
      name: t("healthCheckPassed"),
      description: t("description"),
      time: t("timeAgo.minutes", { count: 5 }),
      icon: TicketCheck,
    },
    {
      name: t("failoverComplete"),
      description: t("description"),
      time: t("timeAgo.minutes", { count: 2 }),
      icon: Replace,
    },
  ]

  return Array.from({ length: 10 }, () => notifications).flat()
}

const Notification = ({ name, description, icon: Icon, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-2xl bg-primary">
          <Icon className="size-5 text-primary-foreground" />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  )
}

export function FailoverNotifications({
  className,
}: {
  className?: string
}) {
  const notifications = useNotifications()
  const t = useTranslations("highAvailability.notifications")

  return (
    <Card className={cn("rounded-sm", className)}>
      <CardHeader>
        <BellIcon className="h-10 w-10 text-primary mb-2" />
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription className="leading-relaxed">
          {t("description")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={cn(
            "relative flex h-[400px] w-full flex-col overflow-hidden py-4"
          )}
        >
          <AnimatedList>
            {notifications.map((item, idx) => (
              <Notification {...item} key={idx} />
            ))}
          </AnimatedList>

          <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
        </div>
      </CardContent>
    </Card>
  )
}
