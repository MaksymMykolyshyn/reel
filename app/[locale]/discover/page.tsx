import { getPopularMovies } from "@/lib/tmbd";
import DiscoverPageClient from "@/components/discover/DiscoverPageClient";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function DiscoverPage({ params }: Props) {
  const { locale } = await params;

  const movies = await getPopularMovies(locale);

  console.log("POPULAR MOVIES:", movies);

  return (
    <DiscoverPageClient
      movies={movies}
      locale={locale}
    />
  );
}