import React from 'react';
import {Modal, StyleSheet, View, TouchableHighlight} from 'react-native';

const ModalWindow = props => (
  <Modal
    animationType={'slide'}
    visible={props.visible}
    onRequestClose={() => props.onRequestClose()}>
    <TouchableHighlight
      style={styles.background}
      onPress={() => props.onRequestClose()}
      underlayColor={'transparent'}>
      <View />
    </TouchableHighlight>
    <View style={styles.outerContainer}>
      <View style={styles.container}>{props.children}</View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    margin: 25,
  },
  background: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  outerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});

export {ModalWindow};
