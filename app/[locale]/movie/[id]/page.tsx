import HeaderMain from "@/components/layout/header/HeaderMain";
import MovieHero from "@/components/movie/movieHero";
import { getMovie, getMovieTrailer, getMovieCredits } from "@/lib/tmbd";
import MovieInfo from "@/components/movie/movieInfo";
import MovieRecomend from "@/components/movie/movieRecomend";
import { Playfair_Display } from "next/font/google";
import Footer from "@/components/layout/footer"

type MoviePageProps = {
  params: Promise<{
    id: string;
    locale: string;
  }>;
};

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  display: "swap",
});

export default async function MoviePage({ params }: MoviePageProps) {
  const { id, locale } = await params;
  const movieId = Number(id);

  const movie = await getMovie(movieId, locale);
  let trailer = await getMovieTrailer(movieId, locale);
  const credits = await getMovieCredits(movieId, locale);
  let movieTrailer = trailer.results.find(
    (video) => video.type === "Trailer" && video.site === "YouTube",
  );

  if (!movieTrailer && locale !== "en-US") {
    trailer = await getMovieTrailer(movieId, "en-US");

    movieTrailer = trailer.results.find(
      (video) => video.type === "Trailer" && video.site === "YouTube",
    );
  }

  return (
    <div
      className={`${playfairDisplay.className} bg-background text-foreground`}
    >
      <HeaderMain />

      <main>
        <MovieHero movie={movie} trailer={trailer} />
        <MovieInfo movie={movie} credits={credits} />
        <MovieRecomend movie={movie} locale={locale} />
      </main>
      <Footer/>
    </div>
  );
}
