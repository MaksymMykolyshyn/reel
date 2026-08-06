"use client";

import { Movie } from "@/types/movie";
import Image from "next/image";
import { getPoster } from "@/lib/tmdb-images";
import { FaRegStar } from "react-icons/fa";
import { useRouter } from "next/navigation";

type MovieCardProps = {
  movie: Movie;
  showReleaseDate: boolean;
  showRating: boolean;
  locale: string;
};

export function MovieCard({
  movie,
  showReleaseDate = false,
  showRating = false,
  locale,
}: MovieCardProps) {


  const router = useRouter();


  return (
    <div className="w-full max-w-80 border border-primary p-4 flex flex-col transition hover:border-accent justify-start">
      <button onClick={() => router.push(`/${locale}/movie/${movie.id}`)}>
        <div className="h-16 flex items-start">
          <h3 className="text-xl font-black uppercase leading-tight line-clamp-2 cursor-pointer transition hover:text-accent">
            {movie.original_title}
          </h3>
        </div>
      </button>
      <button className="block w-full overflow-hidden" onClick={() => router.push(`/${locale}/movie/${movie.id}`)}>
        <Image
          src={getPoster(movie.poster_path)}
          alt={movie.original_title}
          width={500}
          height={750}
          className="w-full h-100 object-cover border border-primary cursor-pointer hover:scale-110 transition duration-200"
        />
      </button>
      {showReleaseDate && (
        <div className="mt-3 text-sm uppercase tracking-widest text-secondary">
          Release: {movie.release_date}
        </div>
      )}
      {showRating && (
        <div className="flex items-center justify-between border-t border-primary pt-3">
          <span className="uppercase text-xs tracking-widest text-secondary">
            Rating
          </span>

          <div className="flex items-center gap-2 font-semibold">
            <FaRegStar className="text-accent" />
            {movie.vote_average.toFixed(1)}
          </div>
        </div>
      )}
    </div>
  );
}
