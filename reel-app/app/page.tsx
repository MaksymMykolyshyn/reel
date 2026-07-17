import { Playfair_Display } from "next/font/google";

import Header from "@/components/layout/header";
import ScrollNavigation from "@/components/main/scrollNavigation";
import Hero from "@/components/main/hero";

import { getWeekMovie } from "@/lib/tmbd";

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  display: "swap",
});

export default async function Home() {
  const movie = await getWeekMovie();

  return (
    <div
      className={`${playfairDisplay.className} bg-background text-foreground`}
    >
      <Header />

      <ScrollNavigation />

      <main className="mt-6 flex justify-center">
        <Hero movie={movie} />
      </main>
    </div>
  );
}