"use client";

import { Movie, Tv } from "@/types/movie";
import Image from "next/image";
import { getPoster } from "@/lib/tmdb-images";
import { FaRegStar } from "react-icons/fa";
import { useRouter } from "next/navigation";

type MovieCardProps = {
  movie: Movie | Tv;
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

  const title = "title" in movie ? movie.title : movie.name
  const originalTitle = "original_title" in movie ? movie.original_title : movie.name
  const releaseDate  = "release_date" in movie ? movie.release_date : movie.first_air_date

  return (
    <div className="w-full  border border-primary p-4 flex flex-col transition hover:border-accent justify-start">
      <button onClick={() => router.push(`/${locale}/movie/${movie.id}`)}>
        <div className="h-16 flex items-start">
          <h3 className="text-xl font-black uppercase leading-tight line-clamp-2 cursor-pointer transition hover:text-accent">
            {title}
          </h3>
        </div>
      </button>
      <button
        className="block w-full overflow-hidden"
        onClick={() => router.push(`/${locale}/movie/${movie.id}`)}
      >
        <Image
          src={getPoster(movie.poster_path)}
          alt={originalTitle}
          width={500}
          height={750}
          className="w-full h-auto object-cover border border-primary cursor-pointer hover:scale-110 transition duration-200"
        />
      </button>
      {showReleaseDate && (
        <div className="mt-3 text-sm uppercase tracking-widest text-secondary">
          Release: {releaseDate}
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

export function TvCard({
  movie,
  showReleaseDate = false,
  showRating = false,
  locale,
}: MovieCardProps) {


  const router = useRouter();

  const title = "title" in movie ? movie.title : movie.name
  const originalTitle = "original_title" in movie ? movie.original_title : movie.name
  const releaseDate  = "release_date" in movie ? movie.release_date : movie.first_air_date

  return (
    <div className="w-full  border border-primary p-4 flex flex-col transition hover:border-accent justify-start">
      <button onClick={() => router.push(`/${locale}/tv/${movie.id}`)}>
        <div className="h-16 flex items-start">
          <h3 className="text-xl font-black uppercase leading-tight line-clamp-2 cursor-pointer transition hover:text-accent">
            {title}
          </h3>
        </div>
      </button>
      <button
        className="block w-full overflow-hidden"
        onClick={() => router.push(`/${locale}/tv/${movie.id}`)}
      >
        <Image
          src={getPoster(movie.poster_path)}
          alt={originalTitle}
          width={500}
          height={750}
          className="w-full h-auto object-cover border border-primary cursor-pointer hover:scale-110 transition duration-200"
        />
      </button>
      {showReleaseDate && (
        <div className="mt-3 text-sm uppercase tracking-widest text-secondary">
          Release: {releaseDate}
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