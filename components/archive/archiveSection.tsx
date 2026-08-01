import { getTitanicMovie } from "@/lib/tmbd";
import { FaArrowRightLong, FaStar } from "react-icons/fa6";
import { PiStarFourFill } from "react-icons/pi";
import Image from "next/image";
import { getPoster } from "@/lib/tmdb-images";
import GenreBadge from "@/components/movie/genreBadge";
import Link from "next/link";
export async function ArchiveSection() {
  const titanicMovie = await getTitanicMovie();
  const stars = Math.round(titanicMovie.vote_average / 2);
  const director = titanicMovie.credits.crew.find(
    (person) => person.job === "Director",
  );

  return (
    <div className="w-full flex gap-10 items-stretch">
      <div className="w-[40%] flex">
        <div className="relative flex-1">
          <Image
            src="/images/LBFilmReel.jpg"
            alt="reel-image"
            width={1200}
            height={1600}
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-8 left-8 text-white">
            <div className="uppercase tracking-[0.3em] text-xs">
              Circa 1940s
            </div>

            <div className="italic text-2xl max-w-xs">
              The golden age of cinema — when stories were told in silver and
              shadow.
            </div>
          </div>
        </div>
      </div>
      <div className="w-[60%] flex flex-col">
        <div className="w-[90%] m-auto">
          <div className="text-accent uppercase text-xs tracking-[0.3em] pt-3">
            archive
          </div>
          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-border"></div>
            <PiStarFourFill className="text-secondary text-[10px] shrink-0" />
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <div className="font-bold text-6xl">Explore Cinema</div>
          <div className="italic text-6xl">Through the Decades</div>
          <div className="w-2/3 pt-6">
            From the silent flickering frames of the 1920s to the digital epics
            of today — the Archive is a living testament to a century of
            storytelling. Browse by decade, genre, auteur, or icon. Every film
            has its place in the canon. Yours awaits.
          </div>
          <button className="text-foreground border-2 border-foreground uppercase tracking-[0.2em] flex flex-row items-center justify-center gap-2 w-75 h-12.5 mt-16">
            Enter the archive <FaArrowRightLong />
          </button>
          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-border"></div>
            <PiStarFourFill className="text-border text-[10px] shrink-0" />
            <div className="flex-1 h-px bg-border"></div>
          </div>
          <div className="border border-border bg-card">
            <div className="flex justify-between border-b border-border px-4 py-2 uppercase tracking-[0.3em] text-[10px] text-secondary">
              <span>Greatest Film of All Time</span>
              <span>by the number of Oscars</span>
            </div>
            <div className="flex">
              <Image
                src={getPoster(titanicMovie.poster_path)}
                alt={titanicMovie.title}
                width={170}
                height={255}
                className="border-r border-border object-cover"
              />
              <div className="flex flex-col flex-1 p-5">
                <Link href="/movie/597">
                  <h3 className="text-5xl italic leading-none">
                    {titanicMovie.title}
                  </h3>
                </Link>
                <div className="flex items-center gap-4 mt-2 text-sm tracking-[0.2em] uppercase text-secondary">
                  <span>{titanicMovie.release_date.slice(0, 4)}</span>

                  <span>|</span>

                  <span>{director?.name}</span>
                </div>
                <div className="flex items-center gap-1 mt-5">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={index < stars ? "text-accent" : "text-border"}
                    />
                  ))}
                  <span className="ml-2 text-sm">
                    {titanicMovie.vote_average.toFixed(1)}
                    <span className="text-secondary"> / 10</span>
                  </span>
                </div>
                <div className="flex gap-2 mt-5">
                  {titanicMovie.genres.map((genre) => (
                    <GenreBadge key={genre.id} name={genre.name} />
                  ))}
                </div>
                <div className="h-px bg-border my-6"></div>
                <p className="italic text-secondary leading-7">
                  {titanicMovie.overview}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
