import React from 'react';
import {Text, View} from 'react-native';
import styles from './CustomHeaderStyle';

interface CustomHeaderType {
  searchText?: string;
}

const CustomHeader: React.FC<CustomHeaderType> = ({searchText}) => {
  return <View style={styles.container}>
    <Text style={styles.headerTitle}>MOVIEFIX</Text>
  </View>;
};

export default CustomHeader;
