export interface MovieObject {
  id: string;
  poster_path: string;
  title: string;
  vote_average: number;
  genre_ids: number[];
}

export interface GenreObject {
  id: string;
  name: string;
}
