import { Movie } from "@/types/movie";
import { getBackdrop } from "@/lib/tmdb-images";
import { getMovie } from "@/lib/tmbd";

type MoviePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = await params;

  const movie = await getMovie(Number(id));

  return (
    <main>
      <h1>movie page: {movie.original_title}</h1>
    </main>
  );
}