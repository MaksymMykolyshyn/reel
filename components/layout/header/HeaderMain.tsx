"use client";

import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export default function HeaderMain() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
  const newPath = pathname.replace(/^\/[^/]+/, `/${newLocale}`);
  router.push(newPath);
};

  return (
    <header className="w-[1800px] mx-auto">
      <div className="uppercase text-accent tracking-[0.2em] flex flex-row justify-between items-center min-h-16">
        <Link className="flex flex-row items-center gap-2" href={"/"}>
          <FaArrowLeftLong /> home
        </Link>
        <div className="text-4xl font-bold text-foreground">Reel</div>
        <div className="flex gap-2 items-center">
          <select
            name="language"
            value={locale}
            className="border border-accent rounded-lg h-7 text-black tracking-normal"
            onChange={(e) => handleLanguageChange(`${e.target.value}`)}
          >
            <option value="en">English</option>
            <option value="uk">Українська</option>
          </select>
          <div className="text-3xl border rounded-full p-1 ">
          <CiUser/>
          </div>
        </div>
      </div>
    </header>
  );
}
