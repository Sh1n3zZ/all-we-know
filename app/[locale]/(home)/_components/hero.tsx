import { useTranslations } from "next-intl";
import HeroWithAurora from "./hero-with-aurora";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <HeroWithAurora
      eyebrow={t("eyebrow")}
      titleLine1={t("title.line1")}
      titleLine2={t("title.line2")}
      subtitle={t("subtitle")}
      primaryCTA={t("primaryCTA")}
      secondaryCTA={t("secondaryCTA")}
    />
  );
}
