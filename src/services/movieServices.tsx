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

const API_KEY = '2dca580c2a14b55200e784d157207b4d';

export const getMoviesByYear = async (
  movieParams: MovieParamObject,
): Promise<MovieResponse> => {
  const response = await apiClient.get<MovieResponse>(`/discover/movie`, {
    params: {
      api_key: API_KEY,
      ...movieParams,
    },
  });
  return response.data;
};

export const getGenre = async (): Promise<GenreObject[]> => {
  const response: any = await apiClient.get<GenreObject[]>(
    `/genre/movie/list`,
    {
      params: {
        api_key: API_KEY,
      },
    },
  );
  return response?.data?.genres;
};
