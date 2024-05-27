import React from 'react';
import {Text, View} from 'react-native';
import styles from './CustomHeaderStyle';

interface GenreListType {
  searchText?: string;
}

const GenreList: React.FC<GenreListType> = ({searchText}) => {
  return <View style={styles.container}>
    <Text style={styles.headerTitle}>MOVIEFIX</Text>
  </View>;
};

export default GenreList;
