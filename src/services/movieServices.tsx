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

interface MovieFilterParamObject {
  query?: string;
  with_genres?: string;
  page: number;
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
  const response: any = await apiClient.get<GenreObject[]>(`/genre/movie/list`);
  return response?.data?.genres;
};

export const getMoviesByFilter = async (
  movieParams: MovieFilterParamObject,
): Promise<MovieResponse[]> => {
  console.log("🚀 ~ movieParams:", movieParams)
  const response = await apiClient.get('/discover/movie', {
    params: {
      ...movieParams,
    },
  });
  return response.data;
};
