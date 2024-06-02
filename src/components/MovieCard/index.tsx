import React from 'react';
import {MovieObject} from '../../types/commonTypes';
import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './MovieCard.Style';
import colors from '../../styles/colors';

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
          <Text style={styles.ratingText}>
            {movie?.vote_average?.toFixed(2) || 7.78}
          </Text>
          <Icon name="star" size={14} color={colors.yellow} />
        </View>
      </View>
    </View>
  );
});

export default MovieCard;
