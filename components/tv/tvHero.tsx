import Image from "next/image";
import { getBackdrop } from "@/lib/tmdb-images";
import { Movie, Tv, TvVideos } from "@/types/movie";
import GenreBadge from "@/components/movie/genreBadge";
import { FaStar, FaPlay } from "react-icons/fa6";

type TvHeroProps = {
  tv: Tv;
  trailer: TvVideos;
};

export default function TvHero({ tv, trailer }: TvHeroProps) {
  const tvTrailer = trailer.results.find(
    (video) =>
      video.type === "Trailer" &&
      video.site === "YouTube"
  );

  const episodeRuntime = tv.episode_run_time?.[0] ?? 0;
  
  const hours = Math.floor(episodeRuntime / 60);
  const minutes = episodeRuntime % 60;

  return (
    <section className="relative min-h-200 overflow-hidden">
      <Image
        src={getBackdrop(tv.backdrop_path)}
        alt={tv.name}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 flex items-center justify-between px-12">
        <div className="flex max-w-150 flex-col gap-5 text-white">
          <span className="uppercase tracking-[0.35em] text-sm text-accent">
            TV Series
          </span>

          <h1 className="text-6xl font-bold italic">
            {tv.original_name}
          </h1>

          {tv.tagline && (
            <p className="text-lg italic text-white/70">
              {`"${tv.tagline}"`}
            </p>
          )}

          <div className="flex flex-wrap gap-2">
            {tv.genres.map((genre) => (
              <GenreBadge
                key={genre.id}
                name={genre.name}
              />
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.15em] text-white/80">
            <span>
              {tv.first_air_date?.slice(0, 4)}
            </span>

            <span className="text-accent">•</span>

            {episodeRuntime > 0 && (
              <>
                <span>
                  {hours > 0 && `${hours}h `}
                  {minutes}min / episode
                </span>

                <span className="text-accent">•</span>
              </>
            )}

            <span className="flex items-center gap-2">
              <FaStar className="text-accent" />
              {tv.vote_average.toFixed(1)}
            </span>
          </div>

          <p className="max-w-137.5 leading-7 text-white/75">
            {tv.overview}
          </p>
        </div>

        <div className="w-175">
          {tvTrailer ? (
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
                  src={`https://www.youtube.com/embed/${tvTrailer.key}`}
                  title={tvTrailer.name}
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