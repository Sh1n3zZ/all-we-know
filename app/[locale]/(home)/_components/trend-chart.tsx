"use client";

import { cn } from "@/lib/utils";
import { AreaChart, Area } from "@/components/charts/area-chart";
import { Grid } from "@/components/charts/grid";
import { XAxis } from "@/components/charts/x-axis";
import { ChartTooltip } from "@/components/charts/tooltip/chart-tooltip";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ActivityIcon } from "lucide-react";
import { useTranslations } from "next-intl";

// Generate mock data with upward trend over 12 months
function generateTrendData() {
  const data = [];
  const startDate = new Date("2025-01-01");
  const baseValue = 12000;

  for (let i = 0; i < 12; i++) {
    const date = new Date(startDate);
    date.setMonth(startDate.getMonth() + i);

    // Create upward trend with some natural variation
    const trend = baseValue + (i * 2500);
    const variation = Math.random() * 1000 - 500;
    const value = Math.round(trend + variation);

    data.push({
      date,
      value,
    });
  }

  return data;
}

const mockData = generateTrendData();

export function TrendChart({
  className,
}: {
  className?: string;
}) {
  const t = useTranslations("highAvailability");

  return (
    <Card className={cn("rounded-sm", className)}>
      <CardHeader>
        <ActivityIcon className="h-10 w-10 text-primary mb-2" />
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription className="leading-relaxed">
          {t("description")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AreaChart data={mockData} aspectRatio="3 / 1" className="w-full">
          <Grid horizontal />
          <Area
            dataKey="value"
            fill="oklch(0.715 0.143 215.221)"
            stroke="oklch(0.715 0.143 215.221)"
            fillOpacity={0.2}
            strokeWidth={2}
          />
          <XAxis />
          <ChartTooltip />
        </AreaChart>
      </CardContent>
    </Card>
  );
}

export default TrendChart;
