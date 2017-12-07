import React from 'react';
import { Text, View, AppRegistry } from 'react-native'; 
import Header from './src/components/Header';
import AlbumList from './src/containers/AlbumList';

const App = () => (
  <View style={{flex: 1 }}>
    <Header headerText={'Albums'}/>
    <AlbumList />
  </View>
  )
    

// Handles rendering 
AppRegistry.registerComponent('albums', () => App);