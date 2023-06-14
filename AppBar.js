import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';




const AppBar = () => {

  return (

    <View style={styles.container}>

      <Image source={require('./img/logo.png')} style={styles.logo} />

    </View>

  );

};




const styles = StyleSheet.create({

  container: {
    height: 70,
    backgroundColor: '#D7F2FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#cccccc',
    marginBottom: 25,

  },

  logo: {

    width: 180,

    height: 60,

    marginLeft: 20,

  },

});




export default AppBar;