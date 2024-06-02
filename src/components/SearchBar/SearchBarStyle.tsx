import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 5,
    paddingLeft: 8,
    color: colors.white,
    backgroundColor: colors.gray100
  },
});
