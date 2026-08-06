import { Movie, MovieResponse, MovieVideos, MovieCredits, Person } from "@/types/movie";
import MovieRecomend from "@/components/movie/movieRecomend"


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

  if (!response.ok) {
    throw new Error("Failed to fetch top rated movies");
  }

  return response.json();
}

export async function getMovieTrailer(id: number, locale: string): Promise<MovieVideos> {
  const tmdbLanguage = locale === 'uk' ? 'uk-UA' : 'en-US';
  const response = await fetch(
    `${BASE_URL}/movie/${id}/videos?language=${tmdbLanguage}`, options);

  if (!response.ok) {
    throw new Error("Failed to fetch top rated movies");
  }

  return response.json();
}

export async function getMovieCredits(id: number, locale: string): Promise<MovieCredits> {
  const tmdbLanguage = locale === 'uk' ? 'uk-UA' : 'en-US';
  const response = await fetch(`${BASE_URL}/movie/${id}/credits?language=${tmdbLanguage}`, options);

  if (!response.ok) {
    throw new Error("Failed to fetch top rated movies");
  }

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

export async function getTopMovies(locale: string): Promise<MovieResponse> {
  const tmdbLanguage = locale === 'uk' ? 'uk-UA' : 'en-US';
  const response = await fetch(
    `${BASE_URL}/movie/top_rated?language=${tmdbLanguage}`,
    options,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch top rated movies");
  }

  return response.json();
}

export async function getTrendingMovies(locale: string): Promise<MovieResponse> {
  const tmdbLanguage = locale === 'uk' ? 'uk-UA' : 'en-US';
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?language=${tmdbLanguage}S`,
    options,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch trending movies");
  }

  return response.json();
}

export async function getUpcomingMovies(locale: string): Promise<MovieResponse> {
  const tmdbLanguage = locale === 'uk' ? 'uk-UA' : 'en-US';
  const response = await fetch(
    `${BASE_URL}/discover/movie?primary_release_date.gte=${today}
    sort_by=primary_release_date.asc&language=${tmdbLanguage}`,
    options,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch upcoming movies");
  }

  return response.json();
}

export async function getNowPlayingMovies(locale: string): Promise<MovieResponse> {
  const tmdbLanguage = locale === 'uk' ? 'uk-UA' : 'en-US';
  const response = await fetch(
    `${BASE_URL}/movie/now_playing?language=${tmdbLanguage}`,
    options,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch now playing movies");
  }

  return response.json();
}

export async function getTitanicMovie(locale: string): Promise<Movie> {
  const tmdbLanguage = locale === 'uk' ? 'uk-UA' : 'en-US';
  const response = await fetch(
    `${BASE_URL}/movie/597?append_to_response=credits&language=${tmdbLanguage}`,
    options,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch now playing movies");
  }

  return response.json();
}

export async function getMoviesByGenre(locale: string, id: number): Promise<MovieResponse> {
  const tmdbLanguage = locale === 'uk' ? 'uk-UA' : 'en-US';
  const response = await fetch(
    `${BASE_URL}/discover/movie?with_genres=${id}&language=${tmdbLanguage}`,
    options,
  );
  if(!response.ok) {
    throw new Error("Failed to fetch movies by genres")
  }

  return response.json()
}
export async function getActorById(locale: string, id: number): Promise<Person> {
  const tmdbLanguage = locale === 'uk' ? 'uk-UA' : 'en-US';

  const response = await fetch(
    `${BASE_URL}/person/${id}?&language=${tmdbLanguage}`,
    options,
  );
  if(!response.ok) {
    throw new Error("Failed to fetch movies by genres")
  }

  return response.json()
}