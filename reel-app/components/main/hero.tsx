'use client'

import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import GenreBadge from "../movie/genreBadge";
import { getBackdrop } from "@/lib/tmdb-images";
import { Movie } from "@/types/movie";
import { useRouter } from "next/navigation";

type HeroProps = {
  movie: Movie;
};

export default function Hero({ movie }: HeroProps) {
    
  const router = useRouter();
  return (
    <section className="w-[90%]">
      <div className="flex justify-between items-center text-lg mb-6">
        <div className="bg-accent text-white px-4 py-1 uppercase tracking-wide">
          Trending this week
        </div>

        <p className="italic text-secondary">
          {`"Cinema is a matter of what's in the frame and what's out."`} —
          Martin Scorsese
        </p>
      </div>

      <div className="grid grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-5">
          <h1 className="text-6xl font-bold leading-none">
            {movie.original_title}
          </h1>

          <p className="text-secondary leading-8">{movie.overview}</p>

          <div className="flex items-center gap-5">
            <span className="text-accent font-semibold">
              {movie.release_date}
            </span>

            <div className="font-semibold flex items-center gap-2">
              {movie.vote_average.toFixed(1)}<FaRegStar className="mt-0.5 text-accent" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {movie.genres.map((genre) => (
              <GenreBadge key={genre.id} name={genre.name} />
            ))}
          </div>
          <button
            className="text-left border border-accent text-accent w-[200px] font-semibold px-4 py-1 uppercase tracking-wide"
            onClick={() => router.push(`/movie/${movie.id}`)}
          >
            See more
          </button>
        </div>

        <div>
          <Image
            src={getBackdrop(movie.backdrop_path)}
            alt={movie.original_title}
            width={1200}
            height={700}
            priority
            className="rounded-lg object-cover w-full h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
