"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { FaRegStar } from "react-icons/fa";
import { getBackdrop } from "@/lib/tmdb-images";
import { FaArrowRightLong } from "react-icons/fa6";
import { useTranslations } from "next-intl";

import GenreBadge from "../movie/genreBadge";

import { Movie } from "@/types/movie";

type HeroProps = {
  movie: Movie;
};

export default function Hero({ movie }: HeroProps) {
  const t = useTranslations("Hero")
  const router = useRouter();
  return (
    <section className="w-[90%]">
      <div className="flex justify-between items-center text-lg mb-6">
        <div className="bg-accent text-white px-4 py-1 uppercase tracking-wide">
          {t("trend")}
        </div>

        <p className="italic text-secondary">
          {t("quote")}
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
              {movie.vote_average.toFixed(1)}
              <FaRegStar className="mt-0.5 text-accent" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {movie.genres.map((genre) => (
              <GenreBadge key={genre.id} name={genre.name} />
            ))}
          </div>
          <button
            className="text-left border border-accent text-accent w-fit font-semibold px-4 py-1 uppercase tracking-wide flex flex-row items-center gap-3 hover:bg-accent hover:text-background transition cursor-pointer"
            onClick={() => router.push(`/movie/${movie.id}`)}
          >
            <span>{t("seeMore")}</span>
             <FaArrowRightLong />
          </button>
        </div>

        <div>
          <Image
            src={getBackdrop(movie.backdrop_path)}
            alt={movie.original_title}
            width={1200}
            height={700}
            priority
            className="object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
}
