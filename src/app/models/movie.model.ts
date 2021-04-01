// Generated by https://quicktype.io

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any; // No lo voy a utilizar
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: any[]; // No lo voy a utilizar
  production_countries: any[]; // No lo voy a utilizar
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Spokenlanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Spokenlanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface Genre {
  id: number;
  name: string;
}
