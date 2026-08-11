import { Tv } from "@/types/movie";
import { getPoster } from "@/lib/tmdb-images";
import { getTvByGenre } from "@/lib/tmbd";
import Image from "next/image";
import Link from "next/link";

type TvRecomendProps = {
  tv: Tv;
  locale: string;
};

export default async function TvRecomend({
  tv,
  locale,
}: TvRecomendProps) {
  const genreId = tv.genres[0]?.id;

  if (!genreId) {
    return null;
  }

  const recommendations = await getTvByGenre(
    locale,
    genreId
  );

  return (
    <div className="mt-10 w-[95%] mx-auto">
      <div className="flex items-end justify-between border-b border-primary pb-4 mb-10">
        <h2 className="text-5xl font-black uppercase tracking-tight">
          Recomend for your
        </h2>

        <span className="text-sm uppercase text-secondary">
          See more
        </span>
      </div>

      <div className="flex flex-row justify-around gap-10 flex-wrap">
        {recommendations.results
          .filter((show) => show.id !== tv.id)
          .slice(0, 5)
          .map((show) => (
            <div
              key={show.id}
              className="w-full max-w-80 border border-primary p-4 flex flex-col transition hover:border-accent justify-start"
            >
              <div className="h-16 flex items-start">
                <Link
                  href={`/tv/${show.id}`}
                  className="text-xl font-black uppercase leading-tight line-clamp-2 cursor-pointer transition hover:text-accent"
                >
                  {show.name}
                </Link>
              </div>

              <Link
                href={`/tv/${show.id}`}
                className="block w-full overflow-hidden"
              >
                <Image
                  src={getPoster(show.poster_path)}
                  alt={show.name}
                  width={500}
                  height={750}
                  className="w-full h-100 object-cover border border-primary cursor-pointer hover:scale-110 transition duration-200"
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}