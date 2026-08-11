import GenreBadge from "@/components/movie/genreBadge";
import { Movie } from "@/types/movie";
import { FaStar } from "react-icons/fa6";
import { getPoster } from "@/lib/tmdb-images";
import { getMovie, getMoviesByGenre } from "@/lib/tmbd";
import Image from "next/image";
import Link from "next/link";
type MovieRecomendProps = {
  movie: Movie;
  locale: string;
};

export default async function MovieRecomend({
  movie,
  locale,
}: MovieRecomendProps) {
  const genreId = movie.genres?.[0]?.id;

  if (!genreId) {
    return null;
  }

  const recommendations = await getMoviesByGenre(locale, genreId);

  return (
    <div className="mt-10 w-[95%] mx-auto">
      <div className="flex items-end justify-between border-b border-primary pb-4 mb-10">
        <h2 className="text-5xl font-black uppercase tracking-tight">
          Recomend for your
        </h2>

        <span className="text-sm uppercase text-secondary">See more</span>
      </div>

      <div className="flex flex-row justify-around gap-10 flex-wrap">
        {recommendations.results.slice(0, 20).map((movie) => (
          <div
            key={movie.id}
            className="w-full max-w-80 border border-primary p-4 flex flex-col transition hover:border-accent justify-start"
          >
            <div className="h-16 flex items-start">
              <Link
                href={`./${movie.id}`}
                className="text-xl font-black uppercase leading-tight line-clamp-2 cursor-pointer transition hover:text-accent"
              >
                {movie.title}
              </Link>
            </div>

            <Link
              href={`./${movie.id}`}
              className="block w-full overflow-hidden"
            >
              <Image
                src={getPoster(movie.poster_path)}
                alt={movie.title}
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
