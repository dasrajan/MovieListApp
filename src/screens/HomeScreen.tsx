import {
  CustomButton,
  CustomHeader,
  FilteredMovieList,
  MovieList,
  SearchBar,
} from '../components';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {
  getGenre,
  getMoviesByFilter,
  getMoviesByGenre,
  getMoviesByYear,
} from '../services/movieServices';
import {GenreObject} from '../types/commonTypes';
import {GenreList} from '../components';
import colors from '../styles/colors';
import axios from 'axios';

interface HomeScreenType {}

const movieDataEmp = [
  {
    id: 1,
    title: 'Captain America',
    poster_path: '',
  },
  {
    id: 2,
    title: 'Captain',
    poster_path: '',
  },
  {
    id: 3,
    title: 'Captain America',
    poster_path: '',
  },
  {
    id: 4,
    title: 'Captain America',
    poster_path: '',
  },
  {
    id: 5,
    title: 'Captain America',
    poster_path: '',
  },
  {
    id: 6,
    title: 'Captain America',
    poster_path: '',
  },
  {
    id: 7,
    title: 'Captain America',
    poster_path: '',
  },
  {
    id: 8,
    title: 'Captain America',
    poster_path: '',
  },
];
const tempMovieData = [
  {
    title: '2012',
    data: movieDataEmp,
  },
  {
    title: '2013',
    data: movieDataEmp,
  },
  {
    title: '2014',
    data: movieDataEmp,
  },
];
const tempGenre = [
  {
    id: 1,
    name: 'Action',
  },
  {
    id: 2,
    name: 'Thriller',
  },
  {
    id: 3,
    name: 'Comedy',
  },
  {
    id: 4,
    name: 'Romantic',
  },
  {
    id: 5,
    name: 'Action',
  },
  {
    id: 6,
    name: 'Thriller',
  },
  {
    id: 7,
    name: 'Comedy',
  },
  {
    id: 8,
    name: 'Romantic',
  },
];

const HomeScreen: React.FC<HomeScreenType> = ({}) => {
  const [genreList, setGenreList] = useState<GenreObject | any>([]);
  const [moviesByYear, setMoviesByYear] = useState<any[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [recentFetchedYear, setRecentFetchedYear] = useState<number>(2012);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('HOME SCREEN');
    fetchGenre();
    fetchMoviesByYear(recentFetchedYear, 'old');
  }, []);

  const fetchGenre = async () => {
    try {
      const result: any = await getGenre();
      setGenreList(result);
    } catch (err) {
      console.log('ERROR', err);
    }
  };

  const fetchMoviesByYear = async (year: number, dirn: string) => {
    try {
      let moviesByYearTemp: any = moviesByYear;

      setLoading(true);
      const response = await getMoviesByYear({
        primary_release_year: year,
        vote_count: {
          gte: 100,
        },
        page: 1,
        sort_by: 'popularity.desc',
      });
      setLoading(false);
      if (moviesByYearTemp?.length > 0) {
        const newMovieList = {
          title: year,
          data: response.results,
        };
        if (dirn === 'old')
          moviesByYearTemp = [...moviesByYearTemp, newMovieList];
        else moviesByYearTemp = [newMovieList, ...moviesByYearTemp];
      } else {
        moviesByYearTemp = [
          {
            title: year,
            data: response.results,
          },
        ];
      }
      console.log(
        '==============> MOVIES <============== ',
        year,
        dirn,
        moviesByYearTemp,
      );
      setMoviesByYear(moviesByYearTemp);
    } catch (err) {
      console.log('ERR', err);
      setLoading(false);
    }
  };

  const fetchMoreYears = async (actionType: string) => {
    if (actionType === 'old') {
      await fetchMoviesByYear(recentFetchedYear - 1, actionType);
      setRecentFetchedYear(recentFetchedYear - 1);
    } else if (moviesByYear[0]?.title) {
      const mostRecentYear = moviesByYear[0]?.title;
      if (new Date().getFullYear() > mostRecentYear) {
        await fetchMoviesByYear(mostRecentYear + 1, actionType);
      } else return;
    }
  };

  const updateGenreIds = (id: number) => {
    if (selectedGenre.includes(id)) {
      setSelectedGenre(selectedGenre.filter((item: number) => item !== id));
    } else setSelectedGenre([...selectedGenre, id]);
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.black,
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}>
      <CustomHeader searchText="" />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={(text: string) => setSearchQuery(text)}
      />
      <GenreList
        data={genreList}
        activeId={selectedGenre}
        setGenre={(id: any) => updateGenreIds(id)}
      />
      {moviesByYear?.length > 0 &&
        searchQuery === '' &&
        selectedGenre?.length === 0 && (
          <MovieList
            movies={moviesByYear}
            fetchMoreDown={() => fetchMoreYears('old')}
            fetchMoreUp={() => fetchMoreYears('new')}
            loading={loading}
          />
        )}
      {(searchQuery !== '' || selectedGenre?.length > 0) && (
        <FilteredMovieList searchQuery={searchQuery} genreIds={selectedGenre} />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
