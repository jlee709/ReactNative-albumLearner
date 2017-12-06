import React from 'react';
import { Text } from 'react-native';

// header cmp
const Header = () => {
  const { textStyle } = styles;
  return(
    <Text style={textStyle}> My Albums </Text>
    );
};

const styles = {
  textStyle: {
    fontSize: 20
  }
};

// exporting for use 
export default Header;