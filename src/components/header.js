import React from 'react';
import { Text, View } from 'react-native';

// header cmp
const Header = () => {
  const { textStyle, viewStyle } = styles;
  return(
    <View style={viewStyle}>
    <Text style={textStyle}> My Cool Albums! </Text>
    </View>
    );
};

const styles = {
  viewStyle:{
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffSet: {width:0, height:5},
    shadowOpacity: 0.25,
    elevation: 2,
    position: 'relative'

  },
  textStyle: {
    fontSize: 25
  }
};

// exporting for use 
export default Header;