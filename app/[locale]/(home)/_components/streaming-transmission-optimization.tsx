"use client"

import { Bot } from "lucide-react"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface StreamingTransmissionOptimizationProps {
    className?: string
}

export function StreamingTransmissionOptimization({ className }: StreamingTransmissionOptimizationProps) {
    const t = useTranslations("highAvailability.streamingOptimization")

    return (
        <Card className={cn("flex flex-col justify-end rounded-sm", className)}>
            <CardHeader>
                <Bot className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{t("title")}</CardTitle>
                <CardDescription className="leading-relaxed">
                    {t("description")}
                </CardDescription>
            </CardHeader>
        </Card>
    )
}
