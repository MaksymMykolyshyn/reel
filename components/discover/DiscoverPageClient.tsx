"use client";

import Image from "next/image";
import HeaderMain from "@/components/layout/header/HeaderMain";
import { Movie } from "@/types/movie";
import { useEffect, useState } from "react";
import { getPoster } from "@/lib/tmdb-images";

type DiscoverPageProps = {
  movies: Movie[];
  locale: string;
};

export default function DiscoverPageClient({
  movies,
  locale,
}: DiscoverPageProps) {
  const [data, setData] = useState("");
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  useEffect(() => {
    const query = data.trim();

    if (!query) {
      return;
    }

    const search = async () => {
      try {
        const response = await fetch(
          `/api/movies/search?query=${encodeURIComponent(
            query
          )}&language=${locale === "uk" ? "uk-UA" : "en-US"}`
        );

        if (!response.ok) {
          throw new Error("Search request failed");
        }

        const result = await response.json();

        console.log("SEARCH RESPONSE:", result);

        setSearchResults(result.results ?? []);
      } catch (error) {
        console.error("Search error:", error);
        setSearchResults([]);
      }
    };

    search();
  }, [data, locale]);

  const displayedMovies = data.trim()
    ? searchResults
    : movies;

  return (
    <>
      <HeaderMain />

      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Search movies..."
        className="border p-2"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {displayedMovies.map((movie) => (
          <a
            key={movie.id}
            href={`/movie/${movie.id}`}
            className="block"
          >
            <Image
              src={getPoster(movie.poster_path)}
              alt={movie.title}
              width={500}
              height={750}
              className="w-full rounded"
            />
          </a>
        ))}
      </div>
    </>
  );
}