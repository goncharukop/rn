import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { request } from '../api/request';

export const PhotoList = ({ onOpen }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = () => {
    request()
      .then(setData);

    setIsLoading(false);
  };

  useEffect(getData, []);

  return (
    <View style={styles.imagesContainer}>
      {isLoading
        ? <Text>Loading...</Text>
        : <FlatList
            data={data}
            renderItem={({item}) => (
              <View
                style={[styles.cardWrap,
                  {
                    borderColor: item.color
                  }
                ]}
                key={item.id}
              >
                  <Text style={styles.textTitle}>
                    {
                      item.description
                      ? item.description
                      : item.alt_description
                    }
                  </Text>
                <View>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => onOpen(item)}
                  >
                    <Image
                        style={styles.image}
                        source={{
                          uri: item.urls.small
                        }}
                      />
                  </TouchableOpacity>
                  <Text style={styles.textAuthor}>
                    Author: {item.user.name}
                  </Text>
                </View>
              </View>
            )}
            numColumns={2}
          />
      }
    </View>
  )
};

const cardSize = 150;

const styles = StyleSheet.create({
  image: {
    width: cardSize,
    height: cardSize,
    borderRadius: 10,
    margin: 7
  },
  cardWrap: {
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    borderBottomWidth: 5
  },
  imagesContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '10%',
  },
  textTitle: {
    width: cardSize,
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  textAuthor: {
    width: cardSize,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'right'
  }
});
