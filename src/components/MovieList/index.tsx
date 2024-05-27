import React, {useCallback, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ListRenderItemInfo,
  RefreshControl,
  SectionList,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './MovieListStyle';
import {MovieObject} from '../../types/commonTypes';
import colors from '../../styles/colors';

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
    // console.log('FORMATTTED DATA RES', formattedData);
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
        // sections={movies?.map(section => ({
        //   ...section,
        //   data: formatData(section.data, 2),
        // }))}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderSection}
        keyExtractor={useCallback((item: Movie) => item.id, [])}
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

const MovieCard = React.memo(({movie}: {movie: MovieObject}) => {
  // console.log('MOVIE CARD || ', movie?.title);
  return (
    <View style={styles.movieContainer} key={movie.id}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
        }}
        style={styles.moviePoster}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.movieTitle} numberOfLines={2}>
          {movie.title}
        </Text>
        <View style={styles.ratingView}>
          <Text style={styles.ratingText}>{movie?.vote_average || 7.78}</Text>
          <Icon name="star" size={14} color={colors.yellow} />
        </View>
      </View>
    </View>
  );
});
