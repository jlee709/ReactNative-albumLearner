import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;
  const {
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    headerContentStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardItem>
      <View style={thumbnailContainerStyle}>
        <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
      </View>
        <View style={styles.headerContentStyle}>
         <Text style={headerTextStyle}>{ title }</Text>
         <Text>{ artist }</Text>
        </View>
      </CardItem>
      <CardItem>
        <Image
        style={imageStyle} 
        source={{ uri: image }} />
      </CardItem>
    </Card>
  );
}; 
 
 const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  headerTextStyle:{
    fontSize: 18
  },

  thumbnailStyle: {
    height: 50,
    width: 50
  },

  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
 }

export default AlbumDetail;