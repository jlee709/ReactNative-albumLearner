import React from 'react';
import { Text, AppRegistry } from 'react-native'; 


const App = () => 
  (
    <Text>Hello</Text>
  );
// Handles rendering 
AppRegistry.registerComponent('albums', () => App);