import { Playfair_Display } from "next/font/google";

import {
  getTopMovies,
  getTrendingMovies,
  getUpcomingMovies,
  getNowPlayingMovies,
  getWeekMovie,
} from "@/lib/tmbd";
import Header from "@/components/layout/header/header";
import ScrollNavigation from "@/components/main/scrollNavigation";
import Hero from "@/components/main/hero";
import MovieSection from "@/components/main/movieSection";
import { ArchiveSection } from "@/components/archive/archiveSection";
import Footer from "@/components/layout/footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  display: "swap",
});

type Params = Promise<{ locale: string }>;

export default async function Home({ params }: { params: Params }) {
  const { locale } = await params;
  const movie = await getWeekMovie(locale);

  const topMovies = await getTopMovies(locale);
  const trendingMovies = await getTrendingMovies(locale);
  const upcomingMovies = await getUpcomingMovies(locale);
  const nowPlayingMovies = await getNowPlayingMovies(locale);

  return (
    <div
      className={`${playfairDisplay.className} bg-background text-foreground`}
    >
      <Header />

      <ScrollNavigation />

      <main className="mt-6 flex justify-center">
        <Hero movie={movie} />
      </main>
      <section>
        <MovieSection
          id="editors-choice"
          title="editorsChoice"
          movies={topMovies.results}
          showRating
          locale={locale}
        />

        <MovieSection
          id="top-trending"
          title="topTrending"
          movies={trendingMovies.results}
          showRating
          locale={locale}
        />

        <MovieSection
          id="upcoming"
          title="upcoming"
          movies={upcomingMovies.results}
          showReleaseDate
          locale={locale}
        />

        <MovieSection
          id="now-playing"
          title="nowPlaying"
          movies={nowPlayingMovies.results}
          showRating
          locale={locale}
        />
      </section>
      <section>
        <ArchiveSection id="archive" locale={locale} />
      </section>
      <Footer />
    </div>
  );
}
