import { Movie } from "@/types/movie";


const BASE_URL = "https://api.themoviedb.org/3";
const today = new Date().toISOString().split("T")[0];
console.log("TMDB token exists:", !!process.env.TMDB_READ_ACCESS_TOKEN);
const options = {
  headers: {
    Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
  },
};

export async function getMovie(id: number, locale: string): Promise<Movie> {
  const tmdbLanguage = locale === 'uk' ? 'uk-UA' : 'en-US';
  const response = await fetch(`${BASE_URL}/movie/${id}?language=${tmdbLanguage}`, options);

  return response.json();
}

export async function getWeekMovie(locale: string) {
  const response = await fetch(`${BASE_URL}/trending/movie/week`, options);

  if (!response.ok) {
    throw new Error("Failed to fetch trending movies");
  }

  const data = await response.json();
  const movieId = data.results[0].id;

  return await getMovie(movieId, locale);
}

export async function getTopMovies() {
  const response = await fetch(
    `${BASE_URL}/movie/top_rated?language=en-US&page=1`,
    options,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch top rated movies");
  }

  return response.json();
}

export async function getTrendingMovies() {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?language=en-US`,
    options,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch trending movies");
  }

  return response.json();
}

export async function getUpcomingMovies() {
  const response = await fetch(
    `${BASE_URL}/discover/movie?primary_release_date.gte=${today}
    sort_by=primary_release_date.asc`,
    options,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch upcoming movies");
  }

  return response.json();
}

export async function getNowPlayingMovies() {
  const response = await fetch(
    `${BASE_URL}/movie/now_playing?language=en-US&page=1`,
    options,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch now playing movies");
  }

  return response.json();
}

export async function getTitanicMovie(): Promise<Movie> {
  const response = await fetch(
    `${BASE_URL}/movie/597?append_to_response=credits`,
    options,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch now playing movies");
  }

  return response.json();
}
