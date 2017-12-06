import React, { Component }  from 'react';
import { View, Text } from 'react-native';
import Axios from 'axios';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount(){
    Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data}));
  }

  render(){
    console.log(this.state);
    return(
      <View>
        <Text>The List of Albums!~</Text>
      </View>
    );
  }
}


export default AlbumList;