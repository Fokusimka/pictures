import React from 'react';
import {View, StyleSheet, Image, FlatList, Pressable} from 'react-native';
import {rootStore, useStore} from '../stores';
import {observer} from 'mobx-react-lite';

const HomeScreen = observer(({navigation}) => {
  const {photos, isDouble} = useStore();

  const twins = isDouble.isDouble;

  React.useEffect(() => {
    if (photos.items.length === 0) {
      fetch('https://api.slingacademy.com/v1/sample-data/photos')
        .then(response => response.json())
        .then(data => {
          data.photos.map(photo => {
            photos.updateItem({
              description: photo.description,
              url: photo.url,
              title: photo.title,
              id: photo.id,
              user: photo.user,
            });
          });
        })
        .catch(error => {
          console.log(error, '<<<< ERROR');
        });
    }
  }, [photos]);

  const numCols = twins ? 2 : 1;

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.list}
        columnWrapperStyle={twins && styles.list}
        key={twins ? 'h' : 'v'}
        data={rootStore.photos.items}
        numColumns={numCols}
        renderItem={({item}) => {
          return (
            <Pressable
              style={styles.photoCard}
              onPress={() => navigation.navigate('Details', {itemId: item.id})}>
              <Image
                style={twins ? styles.image2 : styles.image}
                source={{
                  uri: `${item.url}`,
                }}
              />
            </Pressable>
          );
        }}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  photoCard: {
    alignItems: 'center',
  },
  list: {
    alignItems: 'center',
    gap: 5,
  },
  image: {
    width: 340,
    height: 300,
  },
  image2: {
    width: 170,
    height: 170,
  },
});

export default HomeScreen;
