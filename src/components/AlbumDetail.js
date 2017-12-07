import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album;

  return (
    <Card>
      <CardItem>

      <View>
        <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
      </View>

        <View style={styles.headerContentStyle}>
         <Text>{ title }</Text>
         <Text>{ artist }</Text>
        </View>
      </CardItem>
    </Card>
  );
}; 
 
 const styles = {
  thumbnailStyle: {
    height: 50,
    width: 50
  }
 }

export default AlbumDetail;