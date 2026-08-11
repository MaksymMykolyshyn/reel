import { Movie, Tv } from "@/types/movie";
import { MovieCard, TvCard } from "@/components/movie/movieCard";
import { useTranslations } from "next-intl";

type MovieSectionProps = {
  id: "editors-choice" | "top-trending" | "upcoming" | "now-playing";
  title: "editorsChoice" | "topTrending" | "upcoming" | "nowPlaying";
  movies: Movie[];
  showReleaseDate?: boolean;
  showRating?: boolean;
  locale: string;
  tv?: Tv[];
};

const MovieSection = ({
  id,
  title,
  movies = [],
  showReleaseDate = false,
  showRating = false,
  locale,
  tv = [],
}: MovieSectionProps) => {
  const t = useTranslations("Main");

  return (
    <section className="w-[95%] mx-auto mt-20 mb-20" id={id}>
      <div className="flex items-end justify-between border-b border-primary pb-4 mb-10">
        <h2 className="text-5xl font-black uppercase tracking-tight">
          {t(title)}
        </h2>
        <span className="text-sm uppercase text-secondary">See more </span>
      </div>
      <div className="grid grid-rows-1 xl:grid-cols-4 md:grid-cols-2  gap-10 flex-wrap">
        {movies.slice(0, 4).map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            showReleaseDate={showReleaseDate}
            showRating={showRating}
            locale={locale}
          />
        ))}
        {tv.map((tv) => (
          <TvCard
            key={tv.id}
            movie={tv}
            showReleaseDate={showReleaseDate}
            showRating={showRating}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieSection;
