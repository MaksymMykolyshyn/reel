export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  original_title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
  genres: Genre[];
}