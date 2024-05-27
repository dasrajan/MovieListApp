import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'orange',
    marginVertical: 10
  },
  genreContainer:{
    // backgroundColor: colors.orange,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 10
  },
  activeGenre:{
    borderColor: colors.yellow,
  },
  activeGenreText:{
    color: colors.yellow,
    fontWeight:'bold'
  },
  genreText:{
    fontSize:14,
    fontWeight:'400',
    color: colors.white
  },
  textButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
