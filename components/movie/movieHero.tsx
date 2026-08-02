import Image from "next/image";
import { getBackdrop } from "@/lib/tmdb-images";
import { Movie, MovieVideos } from "@/types/movie";
import GenreBadge from "@/components/movie/genreBadge";
import { FaStar, FaPlay } from "react-icons/fa6";

type MovieHeroProps = {
  movie: Movie;
  trailer: MovieVideos;
  
};

export default function MovieHero({ movie, trailer }: MovieHeroProps) {
  const movieTrailer = trailer.results.find(
    (video) => video.type === "Trailer" && video.site === "YouTube",
  );

  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;

  return (
    <section className="relative min-h-200 overflow-hidden">
      <Image
        src={getBackdrop(movie.backdrop_path)}
        alt={movie.title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 flex items-center justify-between px-12">
        <div className="flex max-w-150 flex-col gap-5 text-white">
          <span className="uppercase tracking-[0.35em] text-sm text-accent">
            Movie
          </span>

          <h1 className="text-6xl font-bold italic">{movie.original_title}</h1>

          {movie.tagline && (
            <p className="text-lg italic text-white/70">
              {`"${movie.tagline}"`}
            </p>
          )}

          <div className="flex flex-wrap gap-2">
            {movie.genres.map((genre) => (
              <GenreBadge key={genre.id} name={genre.name} />
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.15em] text-white/80">
            <span>{movie.release_date.slice(0, 4)}</span>

            <span className="text-accent">•</span>

            <span>
              {hours}h {minutes}min
            </span>

            <span className="text-accent">•</span>

            <span className="flex items-center gap-2">
              <FaStar className="text-accent" />
              {movie.vote_average.toFixed(1)}
            </span>
          </div>

          <p className="max-w-137.5 leading-7 text-white/75">
            {movie.overview}
          </p>
        </div>

        <div className="w-175">
          {movieTrailer ? (
            <div className="overflow-hidden border border-white/20 bg-black shadow-2xl">
              <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
                <FaPlay className="text-accent text-xs" />

                <span className="text-xs uppercase tracking-[0.3em] text-white/70">
                  Official Trailer
                </span>
              </div>

              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${movieTrailer.key}`}
                  title={movieTrailer.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ) : (
            <div className="flex aspect-video items-center justify-center border border-white/20 bg-black/40">
              <span className="uppercase tracking-[0.3em] text-white/50">
                Trailer not found
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
