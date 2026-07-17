

const BASE_URL = "https://api.themoviedb.org/3"

const options = {
    headers: {
        Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
    },
};

export async function getMovie(id: number) {
    const response = await fetch(`${BASE_URL}/movie/${id}`, options);

    return response.json();
}

export async function getWeekMovie() {
  const response = await fetch(
    `${BASE_URL}/trending/movie/week`,
    options
  );

  if (!response.ok) {
    throw new Error("Failed to fetch trending movies");
  }

  const data = await response.json();
  const movieId = data.results[0].id;

  return await getMovie(movieId);
}