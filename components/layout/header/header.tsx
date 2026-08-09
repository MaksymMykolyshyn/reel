'use client'

import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function Header() {

  const t = useTranslations("Header");
  const router = useRouter()
  const locale = useLocale()
  const date = new Date();
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
  const monthName = date.toLocaleDateString("en-US", { month: "long" });
  const fullDate = `${dayName}, ${monthName} ${date.getDate()}, ${date.getFullYear()}`;

  return (
    <>
      <div className="flex flex-row relative items-center justify-center ">
        <div className="text-lg flex justify-center items-center h-10">
          {fullDate}
        </div>
        <select name="language" value={locale} className="border border-accent rounded-lg h-7 absolute right-2" onChange={(e) => router.push(`/${e.target.value}`)}>
          <option value="en">English</option>
          <option value="uk">Українська</option>
        </select>
      </div>

      <div className="width-full bg-secondary h-px"></div>
      <header className="text-xl font-bold text-center h-55 flex flex-col justify-center">
        <h1 className="text-[130px] leading-none">Reel</h1>
        <div className="text-secondary">{t("title")}</div>
        <div className="width-full bg-secondary h-px mt-8"></div>
      </header>
    </>
  );
}
