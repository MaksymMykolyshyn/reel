import { Movie } from "@/types/movie";
import { MovieCard } from "@/components/movie/movieCard";
import { useTranslations } from "next-intl";

type MovieSectionProps = {
  title: "editorsChoice" | "topTrending" | "upcoming" | "nowPlaying";
  movies: Movie[];
  showReleaseDate?: boolean;
  showRating?: boolean;
};

const MovieSection = ({
  title,
  movies,
  showReleaseDate = false,
  showRating = false,
}: MovieSectionProps) => {
  const t = useTranslations("Main");

  return (
    <section className="w-[95%] mx-auto mt-20 mb-20">
      <div className="flex items-end justify-between border-b border-primary pb-4 mb-10">
        <h2 className="text-5xl font-black uppercase tracking-tight">
          {t(title)}
        </h2>
        <span className="text-sm uppercase text-secondary">See more </span>
      </div>
      <div className="flex flex-row justify-around gap-10">
        {movies.slice(0, 5).map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            showReleaseDate={showReleaseDate}
            showRating={showRating}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieSection;
