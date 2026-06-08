import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Cobe } from "@/components/ui/cobe-globe";

export function Hero() {
    const t = useTranslations("hero");

    return (
        <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-start overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 text-left pl-8 lg:pl-12">
                    <div className="inline-flex items-center rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                        {t("eyebrow")}
                    </div>

                    <h1 className="mt-8 text-balance text-5xl font-bold tracking-tight sm:text-7xl">
                        <span className="block">{t("title.line1")}</span>
                        <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            {t("title.line2")}
                        </span>
                    </h1>

                    <p className="mt-8 text-pretty text-lg text-muted-foreground sm:text-xl">
                        {t("subtitle")}
                    </p>

                    <div className="mt-10 flex items-center justify-start gap-4">
                        <Button size="lg" asChild>
                            <Link href="#get-started">{t("primaryCTA")}</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="#components">{t("secondaryCTA")}</Link>
                        </Button>
                    </div>
                </div>

                <div className="flex-1 w-full max-w-lg">
                    <Cobe
                        variant="auto-rotation"
                        markerSize={0}
                    />
                </div>
            </div>
        </section>
    );
}
