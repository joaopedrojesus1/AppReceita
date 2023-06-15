import React from 'react';
import { View, StyleSheet } from 'react-native';

const ModalContainer = ({ children }) => {
  return <View style={styles.container}>{children} </View>;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default ModalContainer;
