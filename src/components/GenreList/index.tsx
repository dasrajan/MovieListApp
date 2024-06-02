import React from 'react';
import {Text, View} from 'react-native';
import {GenreObject} from '../../types/commonTypes';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './GenreListStyle';

interface GenreListType {
  data: GenreObject[];
  activeId: number[];
  setGenre: any;
}

const GenreList: React.FC<GenreListType> = ({data, activeId, setGenre}) => {
  const renderItem = ({item}: any) => {
    const isActive = activeId.includes(item?.id);
    return (
      <TouchableOpacity
        style={[styles.genreContainer, isActive ? styles.activeGenre : {}]}
        key={item?.id}
        onPress={() => setGenre(item?.id)}>
        <Text
          style={[styles.genreText, isActive ? styles.activeGenreText : {}]}>
          {item?.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default GenreList;
