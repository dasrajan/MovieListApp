import React from 'react';
import {Text} from 'react-native';

interface CustomButtonType {
  title: string;
}

const CustomButton: React.FC<CustomButtonType> = ({title}) => {
  return <Text>{title}</Text>;
};

export default CustomButton;
