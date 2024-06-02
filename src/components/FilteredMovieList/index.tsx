import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './FilteredMovieList.Style';
import {getMoviesByFilter} from '../../services/movieServices';
import {FlatList} from 'react-native-gesture-handler';
import MovieCard from '../MovieCard';
import {MovieObject} from '../../types/commonTypes';

interface FilteredMovieListType {
  searchQuery: string;
  genreIds: number[];
}

const FilteredMovieList: React.FC<FilteredMovieListType> = ({
  searchQuery,
  genreIds,
}) => {
  const [movies, setMovies] = useState<MovieObject[]>([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [loader, setLoader] = useState(false);
  const timeoutRef: any = useRef(null);
  const flatListRef: any = useRef(null);

  useEffect(() => {
    if (searchQuery || genreIds) {
      setPage(1);
      setMovies([]);
      flatListRef?.current?.scrollToOffset({animated: true, offset: 0});
      fetchMovies(1);
    }
  }, [query, genreIds]);

  useEffect(() => {
    if (page > 1) {
      fetchMovies(page);
    }
  }, [page]);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    //Debounce effect to reduce API call
    timeoutRef.current = setTimeout(() => {
      setQuery(searchQuery);
    }, 500); // 500ms delay
  }, [searchQuery]);

  const fetchMovies = async (pageNo: number) => {
    try {
      setLoader(true);
      const response: any = await getMoviesByFilter({
        query: encodeURIComponent(query),
        page: pageNo,
        with_genres: genreIds.join('|'),
      });
      setLoader(false);
      if (pageNo > 1) {
        setMovies([...movies, ...response.results]);
      } else setMovies(response.results);
    } catch (error) {
      setLoader(false);
      console.error(error);
    }
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  const renderItem = useCallback(({item, index}: any) => {
    return <MovieCard movie={item} />;
  }, []);

  return (
    <View style={styles.container}>
      {loader && page === 1 && (
        <View style={styles.loaderWrapper}>
          <ActivityIndicator size="large" color="#FFF" />
        </View>
      )}
      <FlatList
        ref={flatListRef}
        data={movies}
        keyExtractor={useCallback((item: MovieObject) => item.id, [])}
        renderItem={renderItem}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        numColumns={2}
        columnWrapperStyle={styles.listWrapper}
      />
    </View>
  );
};

export default FilteredMovieList;
