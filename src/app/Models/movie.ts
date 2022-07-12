export interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  production_countries: Countries[];
  revenue: number;
  runtime: number;
  status: string;
  genres: Genre[];
  budget: number;
}

export interface MovieDto {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Countries {
  iso_3166_1: string;
  name: string;
}

export interface MovieVideoDto {
  id: number;
  results: MovieVideo[];
}

export interface MovieVideo {
  site: string;
  key: string;
  published_at: string;
  name: string;
}

export interface MovieImages {
  backdrops: {
    file_path: string;
  }[];
}
