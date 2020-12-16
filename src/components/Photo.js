import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

export const Photo = ({photoUrl, onClose}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onClose(null)}
    >
      <Image
        style={styles.image}
        source={{uri: photoUrl}}
      />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
});
