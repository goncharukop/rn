import React from 'react';
import { View } from 'react-native';
import { Photo } from '../components/Photo';

export const ImageScreen = ({photoUrl, hidePhoto}) => {
  return (
    <View>
      <Photo photoUrl={photoUrl} onClose={hidePhoto} />
    </View>
  )
};
