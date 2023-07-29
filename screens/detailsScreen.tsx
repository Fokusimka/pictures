import React from 'react';
import {StyleSheet, Text, Image, View, Pressable} from 'react-native';
import {observer} from 'mobx-react-lite';
import {rootStore} from '../stores';
import Pinchable from 'react-native-pinchable';
import {ModalWindow} from '../components/modalWindow';

const DetailsScreen = observer(({route}) => {
  const {itemId} = route.params;

  const store = rootStore.photos.items;
  const photo = store.find(photoItems => photoItems.id === itemId);

  const [isFullScreen, setIsFullScreen] = React.useState(false);

  return (
    <View style={styles.mainFrame}>
      <Text style={styles.title}>{photo?.title}</Text>
      <View style={styles.imageContainer}>
        <Pressable onPress={() => setIsFullScreen(true)}>
          <Image
            style={styles.image}
            source={{
              uri: `${photo?.url}`,
            }}
          />
        </Pressable>
        <ModalWindow
          visible={isFullScreen}
          onRequestClose={() => setIsFullScreen(false)}>
          <Pinchable>
            <Image
              style={styles.image}
              source={{
                uri: `${photo?.url}`,
              }}
            />
          </Pinchable>
        </ModalWindow>
      </View>
      <Text>{photo?.description}</Text>
      {/* <Text>{photo?.user}</Text> */}
    </View>
  );
});

const styles = StyleSheet.create({
  mainFrame: {
    padding: 5,
    gap: 10,
  },
  title: {
    color: 'black',
    fontSize: 25,
    textAlign: 'right',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 350,
  },
});

export default DetailsScreen;
