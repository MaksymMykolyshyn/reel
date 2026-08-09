import { getTitanicMovie } from "@/lib/tmbd";
import { FaArrowRightLong, FaStar } from "react-icons/fa6";
import { PiStarFourFill } from "react-icons/pi";
import Image from "next/image";
import { getPoster } from "@/lib/tmdb-images";
import GenreBadge from "@/components/movie/genreBadge";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

type ArchiveSectionProps = {
  locale: string;
  id: "archive";
};

export async function ArchiveSection({ locale, id }: ArchiveSectionProps) {
  const t = await getTranslations("Archive");
  const titanicMovie = await getTitanicMovie(locale);
  const stars = Math.round(titanicMovie.vote_average / 2);
  const director = titanicMovie.credits?.crew?.find(
    (person) => person.job === "Director",
  );

  return (
    <div className="flex flex-col lg:flex-row min-h-screen" id={id}>
      <div className="relative w-full lg:w-[40%] lg:min-h-screen">
        <Image src="/images/LBFilmReel.jpg" alt="arcihve section photo" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-white">
          <div className="uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[10px] sm:text-xs">
            {t("titleImage")}
          </div>
          <div className="italic text-xl sm:text-2xl max-w-xs leading-tight">
            {t("descriptionImage")}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[60%] flex flex-col">
        <div className="w-[88%] max-w-4xl mx-auto py-8 sm:py-10 lg:py-12">
          <div className="text-accent uppercase text-[10px] sm:text-xs tracking-[0.3em]">
            {t("archive")}
          </div>
          <div className="flex items-center gap-3 sm:gap-4 my-7 sm:my-10">
            <div className="flex-1 h-px bg-border" />
            <PiStarFourFill className="text-secondary text-[8px] sm:text-[10px] shrink-0" />
            <div className="flex-1 h-px bg-border" />
          </div>
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
            {t("exploreCinema")}
          </h1>
          <h2 className="italic text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
            {t("title")}
          </h2>
          <p className="w-full sm:w-4/5 lg:w-2/3 pt-6 text-sm sm:text-base leading-7">
            {t("description")}
          </p>
          <button
            className="
          text-foreground
          border-2 border-foreground
          uppercase tracking-[0.15em] sm:tracking-[0.2em]
          flex items-center justify-center gap-2
          w-full sm:w-75
          h-12.5
          mt-10 sm:mt-16
          text-xs
          hover:bg-black
          hover:text-background
          transition duration-200
        "
          >
            {t("archiveButton")}
            <FaArrowRightLong />
          </button>
          <div className="flex items-center gap-3 sm:gap-4 my-8 sm:my-10">
            <div className="flex-1 h-px bg-border" />
            <PiStarFourFill className="text-border text-[8px] sm:text-[10px] shrink-0" />
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="border border-border bg-card">
            <div
              className="
            flex flex-col gap-2
            sm:flex-row sm:justify-between
            border-b border-border
            px-4 py-3
            uppercase tracking-[0.25em]
            text-[9px] sm:text-[10px]
            text-secondary
          "
            >
              <span>{t("greatest")}</span>
              <span>{t("oskars")}</span>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-42.5 shrink-0">
                <Image
                  src={getPoster(titanicMovie.poster_path)}
                  alt={titanicMovie.title}
                  width={170}
                  height={255}
                  className="
                w-full
                h-64 sm:h-full
                sm:min-h-63.75
                object-cover
                border-b sm:border-b-0
                sm:border-r
                border-border
              "
                />
              </div>
              <div className="flex flex-col flex-1 p-4 sm:p-5">
                <Link
                  className="w-fit hover:text-accent transition duration-200"
                  href="/movie/597"
                >
                  <h3 className="text-4xl sm:text-5xl italic leading-none">
                    {titanicMovie.title}
                  </h3>
                </Link>
                <div
                  className="
                flex flex-wrap
                items-center
                gap-x-3 gap-y-1
                mt-2
                text-[10px] sm:text-sm
                tracking-[0.15em]
                sm:tracking-[0.2em]
                uppercase
                text-secondary
              "
                >
                  <span>{titanicMovie.release_date.slice(0, 4)}</span>
                  <span className="hidden sm:inline">|</span>
                  <span>{director?.name}</span>
                </div>
                <div className="flex items-center gap-1 mt-4 sm:mt-5">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={index < stars ? "text-accent" : "text-border"}
                    />
                  ))}
                  <span className="ml-2 text-xs sm:text-sm">
                    {titanicMovie.vote_average.toFixed(1)}
                    <span className="text-secondary"> / 10</span>
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 sm:mt-5">
                  {titanicMovie.genres.map((genre) => (
                    <GenreBadge key={genre.id} name={genre.name} />
                  ))}
                </div>
                <div className="h-px bg-border my-5 sm:my-6" />

                <p className="italic text-secondary leading-6 sm:leading-7 text-sm sm:text-base">
                  {titanicMovie.overview}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
            <div className="flex-1 h-px bg-border" />
            <PiStarFourFill className="text-border text-[8px]" />
            <div className="flex-1 h-px bg-border" />
          </div>
        </div>
      </div>
    </div>
  );
}
