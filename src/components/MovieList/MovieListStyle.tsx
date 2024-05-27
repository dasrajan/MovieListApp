import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.white,
  },
  movieContainer: {
    marginRight: 10,
    flex: 1,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 5,
    // borderWidth: 0.5,
    // borderColor: colors.white,
  },
  moviePoster: {
    width: '100%',
    height: Dimensions.get('window').width * 0.75,
    borderWidth: 1,
    backgroundColor: colors.gray100,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  infoContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  ratingView: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ratingText: {
    fontSize: 14,
    color: colors.white,
    fontWeight: 'bold',
    marginRight: 5
  },
  movieTitle: {
    flex: 2,
    color: colors.white,
    padding: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
    color: colors.white,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
