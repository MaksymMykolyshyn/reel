"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function Header() {
  const t = useTranslations("Header");
  const router = useRouter();
  const locale = useLocale();
  const date = new Date();
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
  const dayMobileName = date.toLocaleDateString("en-US", { weekday: "short" });
  const monthName = date.toLocaleDateString("en-US", { month: "long" });
  const monthMobileName = date.toLocaleDateString("en-US", { month: "short" });
  const fullDate = `${dayName}, ${monthName} ${date.getDate()}, ${date.getFullYear()}`;
  const mobileDate = `${dayMobileName}, ${monthMobileName} ${date.getDate()}`;

  return (
    <>
      <div className="flex flex-row relative items-center justify-center h-10">
        <div className="flex justify-center items-center">
          <div className="md:hidden text-lg">
            {mobileDate}
          </div>

          <div className="hidden md:block text-lg">
            {fullDate}
          </div>
        </div>
        <select
          name="language"
          value={locale}
          className="border border-accent w-fit font-semibold tracking-wide h-7 absolute right-2 md:block hidden"
          onChange={(e) => router.push(`/${e.target.value}`)}
        >
          <option className="md:block hidden" value="en">
            English
          </option>
          <option className="md:block hidden" value="uk">
            Українська
          </option>
        </select>
        <select
          name="language"
          value={locale}
          className="border border-accent w-fit font-semibold tracking-wide h-7 absolute right-2 block md:hidden"
          onChange={(e) => router.push(`/${e.target.value}`)}
        >
          <option value="en">
            En
          </option>
          <option value="uk">
            Укр
          </option>
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
