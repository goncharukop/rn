import React from 'react';
import { View } from 'react-native';
import { PhotoList } from '../components/PhotoList';

export const MainScreen = ({showPhoto}) => {
  return (
    <View>
      <PhotoList onOpen={showPhoto} />
    </View>
  )
};
