import { getBackdrop } from "@/lib/tmdb-images";
import { getMovie } from "@/lib/tmbd";
import Image from "next/image";
import HeaderMain from "@/components/layout/header/HeaderMain";

type MoviePageProps = {
  params: Promise<{
    id: string;
    locale: string;
  }>;
};

export default async function MoviePage({ params }: MoviePageProps) {
  const { id, locale } = await params;

  const movie = await getMovie(+id, locale);

  return (
    <>
      <HeaderMain />
    </>
  );
}
