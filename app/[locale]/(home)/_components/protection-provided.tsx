"use client"

import { BrickWallShield } from "lucide-react"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface ProtectionProvidedProps {
    className?: string
}

export function ProtectionProvided({ className }: ProtectionProvidedProps) {
    const t = useTranslations("highAvailability.protection")

    return (
        <Card
            className={cn("rounded-sm", className)}
            style={{
                backgroundColor: '#3eb6ff',
                borderColor: '#6cd5ff'
            }}
        >
            <CardHeader>
                <BrickWallShield className="h-10 w-10 mb-2" style={{ color: '#ffffff' }} />
                <CardTitle style={{ color: '#ffffff' }}>{t("title")}</CardTitle>
                <CardDescription className="leading-relaxed" style={{ color: '#ffffff' }}>
                    {t("description")}
                </CardDescription>
            </CardHeader>
        </Card>
    )
}
