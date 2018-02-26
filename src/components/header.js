import React from 'react';
import { Text, View } from 'react-native';

// header cmp
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return(
    <View style={viewStyle}>
    <Text style={textStyle}> {props.headerText}</Text>
    </View>
    );
};

const styles = {
  viewStyle:{
    backgroundColor: '#3E3E3E',
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    paddingTop: 17,
    shadowColor: '#000',
    shadowOffset: {width:0, height:5},
    shadowOpacity: 0.25,
    elevation: 2,
    position: 'relative'

  },
  textStyle: {
    fontSize: 25
  }
};

// exporting for use ~
export default Header;