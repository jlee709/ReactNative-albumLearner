import React from 'react';
import  { Text, TouchableOpacity, } from 'react-native';

const Button = () => {
  const { buttonStyle, textStyle } = styles;

  return(
    <TouchableOpacity style={buttonStyle}>
      <Text style={textStyle}>
        Purchase Here!
      </Text>
    </TouchableOpacity>
  );
} 

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#0000FF',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },

  buttonStyle: {
    felx: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#0000FF',
    margineLeft: 5,
    margineRight: 5

  }
}

export default Button;