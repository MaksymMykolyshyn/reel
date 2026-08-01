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

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  display: "swap",
});

type Params = Promise<{ locale: string }>;

export default async function Home({ params }: { params: Params }) {
  const { locale } = await params;
  const movie = await getWeekMovie(locale);

  const topMovies = await getTopMovies();
  const trendingMovies = await getTrendingMovies();
  const upcomingMovies = await getUpcomingMovies();
  const nowPlayingMovies = await getNowPlayingMovies();

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
          title="Editor's Choice"
          movies={topMovies.results}
          showRating
        />

        <MovieSection
          title="Top Trending"
          movies={trendingMovies.results}
          showRating
        />

        <MovieSection
          title="Upcoming"
          movies={upcomingMovies.results}
          showReleaseDate
        />

        <MovieSection
          title="Now Playing"
          movies={nowPlayingMovies.results}
          showRating
        />
      </section>
      <section>
        <ArchiveSection />
      </section>
    </div>
  );
}
