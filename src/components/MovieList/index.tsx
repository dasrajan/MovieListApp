import React, {useCallback, useState} from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  SectionList,
  Text,
  View,
} from 'react-native';
import styles from './MovieListStyle';
import MovieCard from '../MovieCard';
import {MovieObject} from '../../types/commonTypes';

interface MovieListType {
  movies: any[];
  fetchMoreDown: any;
  fetchMoreUp: any;
  loading?: boolean;
}

interface Movie {
  id: string;
  title: string;
  poster: string;
}

interface Section {
  title: string;
  data: Movie[];
}

const MovieList: React.FC<MovieListType> = ({
  movies,
  fetchMoreDown,
  fetchMoreUp,
  loading,
}) => {
  const [refreshing, setRefreshing] = useState(false);

  const processRowData = (movies: any) => {
    const newSectionListRow = movies?.map((section: any) => ({
      ...section,
      data: formatData(section.data, 2),
      id: section?.title,
    }));
    return newSectionListRow;
  };

  const formatData = (data: Movie[], numColumns: number): Movie[][] => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({
        id: `blank-${numberOfElementsLastRow}`,
        title: '',
        poster: '',
      } as Movie);
      numberOfElementsLastRow++;
    }

    const formattedData = data.reduce((acc: Movie[][], item, index) => {
      const rowIndex = Math.floor(index / numColumns);
      if (!acc[rowIndex]) {
        acc[rowIndex] = [];
      }
      acc[rowIndex].push(item);
      return acc;
    }, []);
    return formattedData;
  };

  const renderSectionHeader = useCallback(({section}: {section: Section}) => {
    return <Text style={styles.header}>{section.title}</Text>;
  }, []);

  const renderSection = useCallback(({item, index}: any) => {
    return (
      <View style={styles.row}>
        {/* {item.map((movie: MovieObject) => (
          <MovieCard movie={movie} />
        ))} */}
        <MovieCard movie={item} key={item?.id} />
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <SectionList
        sections={movies}
        // sections={processRowData(movies)}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderSection}
        keyExtractor={useCallback((item: Movie) => item.title, [])}
        onEndReached={fetchMoreDown}
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
        maxToRenderPerBatch={10} // Number of items rendered in a batch during scroll
        windowSize={21} // Default is 21 (10 before, 10 after, 1 visible)
        updateCellsBatchingPeriod={50} // Time (in ms) between rendering batches
        removeClippedSubviews={true} // Improve performance by removing offscreen components
        // getItemLayout={getItemLayout}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="#FFF" /> : null
        }
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchMoreUp} />
        }
      />
    </View>
  );
};

export default MovieList;
