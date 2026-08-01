import { Movie } from "@/types/movie";
import { MovieCard } from "@/components/movie/movieCard";

type MovieSectionProps = {
  title: string;
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
  return (
    <section className="w-[95%] mx-auto mt-20 mb-20">
      <div className="flex items-end justify-between border-b border-primary pb-4 mb-10">
        <h2 className="text-5xl font-black uppercase tracking-tight">
          {title}
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
