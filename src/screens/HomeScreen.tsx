import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/background.png')}
        style={styles.background}
        resizeMode="cover"
      />
      <HeaderBar />
      <View style={styles.searchWrapper}>
        <SearchBar />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  background: {
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  searchWrapper: {
    position: 'absolute',
    top: '40%',
    left: 0,
    right: 20,
    transform: [{ translateY: -25 }],
  },
});
