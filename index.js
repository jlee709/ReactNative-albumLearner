import React from 'react';
import { Text, AppRegistry } from 'react-native'; 
import Header from './src/components/header';


const App = () => (
  <Header />
  )
    

// Handles rendering 
AppRegistry.registerComponent('albums', () => App);