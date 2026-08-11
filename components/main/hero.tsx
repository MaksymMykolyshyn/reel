"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { FaRegStar } from "react-icons/fa";
import { getBackdrop, getPoster } from "@/lib/tmdb-images";
import { FaArrowRightLong } from "react-icons/fa6";
import { useTranslations } from "next-intl";

import GenreBadge from "../movie/genreBadge";

import { Movie } from "@/types/movie";

type HeroProps = {
  movie: Movie;
};

export default function Hero({ movie }: HeroProps) {
  const t = useTranslations("Hero");
  const router = useRouter();
  return (
    <section className="w-full md:w-[95%] lg:w-[90%]">
      <div className="flex justify-between items-center text-lg mb-6 flex-wrap gap-3">
        <div className="bg-accent text-white px-4 py-1 uppercase tracking-wide">
          {t("trend")}
        </div>

        <p className="italic text-secondary w-full sm:w-[80%] lg:w-[60%] text-left sm:text-right ml-auto">
          {t("quote")}
        </p>
      </div>
      <div
        className="
      grid
      grid-cols-1
      md:grid-cols-[minmax(0,1fr)_260px]
      lg:grid-cols-2
      gap-8
      md:gap-10
      lg:gap-12
      items-center
    "
      >
        <div
          className="
        relative
        order-1
        md:order-2
        overflow-hidden
        md:aspect-2/3
        lg:aspect-auto
      "
        >
          <h1
            className="
          absolute
          bottom-0
          left-0
          right-0
          z-10
          p-4
          text-3xl
          sm:text-5xl
          font-bold
          leading-none
          text-background
          md:hidden
          bg-linear-to-t
          from-black/80
          via-black/30
          to-transparent
        "
          >
            {movie.original_title}
          </h1>
          <Image
            src={getBackdrop(movie.backdrop_path)}
            alt={movie.original_title}
            width={1200}
            height={700}
            priority
            className="
          block
          md:hidden
          lg:block
          object-cover
          w-full
          h-auto
        "
          />
          <Image
            src={getPoster(movie.poster_path)}
            alt=""
            width={500}
            height={750}
            className="
          hidden
          md:block
          lg:hidden
          w-full
          h-full
          object-cover
        "
          />
        </div>
        <div
          className="
        flex
        flex-col
        gap-5
        order-2
        md:order-1
      "
        >
          <h1
            className="
          hidden
          md:block
          text-4xl
          lg:text-5xl
          xl:text-6xl
          font-bold
          leading-none
        "
          >
            {movie.original_title}
          </h1>
          <p
            className="
          text-secondary
          leading-7
          md:text-base
          md:leading-7
          md:line-clamp-4
          lg:text-lg
          lg:leading-8
          lg:line-clamp-none
        "
          >
            {movie.overview}
          </p>
          <div className="flex items-center gap-4 md:gap-5 text-sm md:text-base">
            <span className="text-accent font-semibold">
              {movie.release_date}
            </span>

            <div className="font-semibold flex items-center gap-2">
              <span>{movie.vote_average.toFixed(1)}</span>

              <FaRegStar className="mt-0.5 text-accent" />
            </div>
          </div>
          <div
            className="
          flex
          gap-2
          overflow-x-auto
          pb-1
          md:flex-wrap
          md:overflow-visible
        "
          >
            {movie.genres.map((genre) => (
              <GenreBadge key={genre.id} name={genre.name} />
            ))}
          </div>
          <button
            className="
          text-left
          border
          border-accent
          text-accent
          w-full
          md:w-fit
          font-semibold
          px-4
          py-2
          uppercase
          tracking-wide
          flex
          items-center
          justify-center
          md:justify-start
          gap-3
          hover:bg-accent
          hover:text-background
          transition
          cursor-pointer
        "
            onClick={() => router.push(`/movie/${movie.id}`)}
          >
            <span>{t("seeMore")}</span>
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </section>
  );
}
