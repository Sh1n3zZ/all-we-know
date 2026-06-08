import Image from "next/image"
import { useTranslations } from "next-intl"

import { Marquee } from "@/components/ui/marquee"

const companies = [
  {
    name: "China Mobile",
    url: "/partner/China_Mobile_logo_(2019).svg",
  },
  {
    name: "China Telecom",
    url: "/partner/China_Telecom_Logo.svg",
  },
  {
    name: "China Unicom",
    url: "/partner/China_Unicom_logo_(2022).svg",
  },
  {
    name: "Cogent Communications",
    url: "/partner/Cogent_Communications_logo.svg",
  },
  {
    name: "Lumen Technologies",
    url: "/partner/Lumen_Technologies_logo.svg",
  },
  {
    name: "Mellanox Technologies",
    url: "/partner/Mellanox_Technologies_logo.svg",
  },
  {
    name: "NTT",
    url: "/partner/NTT_2025.svg",
  },
  {
    name: "NVIDIA",
    url: "/partner/NVIDIA_logo.svg",
  },
  {
    name: "PCCW",
    url: "/partner/PCCW_(Hong_Kong_ICT_company)_logo_(fair_use).svg",
  },
]

export function PartnerLogos() {
  const t = useTranslations("partner")

  return (
    <div className="flex w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <section id="logos">
          <div className="container mx-auto px-4 py-12 md:px-8">
            <h3 className="text-center text-sm font-semibold text-gray-500">
              {t("title")}
            </h3>
            <div className="relative mt-6">
              <Marquee className="max-w-full [--duration:40s]">
                {companies.map((company, idx) => (
                  <Image
                    key={idx}
                    width={112}
                    height={40}
                    src={company.url}
                    className="h-10 w-28 opacity-30 grayscale dark:brightness-0 dark:invert"
                    alt={company.name}
                  />
                ))}
              </Marquee>
              <div className="from-background pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r"></div>
              <div className="from-background pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
