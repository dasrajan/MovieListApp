import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {GenreObject} from '../../types/commonTypes';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './SearchBarStyle';

interface SearchBarType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarType> = ({searchQuery, setSearchQuery}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search movies..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholderTextColor={"#FFF"}
      />
    </View>
  );
};

export default SearchBar;
