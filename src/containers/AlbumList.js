import React, { Component }  from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  componentWillMount(){
    console.log('called');
  }


  render(){
    return(
      <View>
        <Text>The List of Albums!~</Text>
      </View>
    );
  }
}


export default AlbumList;