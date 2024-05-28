import {MovieObject} from '../types/commonTypes';
import apiClient from './apiClient';

interface MovieParamObject {
  sort_by: string;
  primary_release_year: number;
  page: number;
  vote_count: {
    gte: number;
  };
}

interface MovieResponse {
  page: number;
  results: MovieObject[];
  total_pages: number;
}

interface GenreObject {
  id: string;
  name: string;
}

export const getMoviesByYear = async (
  movieParams: MovieParamObject,
): Promise<MovieResponse> => {
  const response = await apiClient.get<MovieResponse>(`/discover/movie`, {
    params: {
      ...movieParams,
    },
  });
  return response.data;
};

export const getGenre = async (): Promise<GenreObject[]> => {
  console.log('REQ');
  const response: any = await apiClient.get<GenreObject[]>(`/genre/movie/list`);
  return response?.data?.genres;
};

export const getMoviesByGenre = async (genreId: number): Promise<MovieResponse[]> => {
  const response = await apiClient.get('/discover/movie', {
    params: {
      with_genres: genreId,
    },
  });
  return response.data;
};
