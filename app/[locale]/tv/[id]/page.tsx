import HeaderMain from "@/components/layout/header/HeaderMain";
import TvHero from "@/components/tv/tvHero";
import { getTv, getTvTrailer, getTvCredits } from "@/lib/tmbd";
import TvInfo from "@/components/tv/tvInfo";
import TvRecomend from "@/components/tv/tvRecomend";
import { Playfair_Display } from "next/font/google";
import Footer from "@/components/layout/footer";

type TvPageProps = {
  params: Promise<{
    id: string;
    locale: string;
  }>;
};

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  display: "swap",
});

export default async function TvPage({ params }: TvPageProps) {
  const { id, locale } = await params;
  const tvId = Number(id);

  const tv = await getTv(tvId, locale);

  let trailer = await getTvTrailer(tvId, locale);

  const credits = await getTvCredits(tvId, locale);

  let tvTrailer = trailer.results.find(
    (video) =>
      video.type === "Trailer" &&
      video.site === "YouTube"
  );

  if (!tvTrailer && locale !== "en-US") {
    trailer = await getTvTrailer(tvId, "en-US");

    tvTrailer = trailer.results.find(
      (video) =>
        video.type === "Trailer" &&
        video.site === "YouTube"
    );
  }

  return (
    <div
      className={`${playfairDisplay.className} bg-background text-foreground`}
    >
      <HeaderMain />

      <main>
        <TvHero tv={tv} trailer={trailer} />

        <TvInfo
          tv={tv}
          credits={credits}
        />

        <TvRecomend
          tv={tv}
          locale={locale}
        />
      </main>

      <Footer />
    </div>
  );
}