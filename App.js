import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { MainScreen } from './src/screens/MainScreen';
import { ImageScreen } from './src/screens/ImageScreen';

export default function App() {
  const [cardId, setCardId] = useState(null);
  const [cardPhoto, setCardPhoto] = useState(null);

  let content = (
    <MainScreen
      showPhoto={(item) => (
        setCardId(item.id),
        setCardPhoto(item.urls.small)
      )}
    />
  );

  if (cardId) {
    content = (
      <ImageScreen
        photoUrl={cardPhoto}
        hidePhoto={(id) => setCardId(id)}
      />
    )
  }

  return (
    <View style={styles.container}>
      { content }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
  }
});
