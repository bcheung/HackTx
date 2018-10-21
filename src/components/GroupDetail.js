import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

const GroupDetail = (props) => {
  const {
    containerStyle, thumbnailStyle, thumbnailContainerStyle, groupInfoStyle, statusPicStyle
  } = styles;
  
  return (
    <View style={containerStyle}>
      <TouchableOpacity style={containerStyle}>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={require('../../assets/Logo.png')}
          />
        </View>

        <View style={groupInfoStyle}>
          <Text style={{ fontSize: 30 }}>
            {props.name}
          </Text>
          <Text>
            {props.people}
          </Text>
        </View>

        <View style={thumbnailContainerStyle}>
          <Image
            style={statusPicStyle}
            source={require('../../assets/dollar-symbol.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  containerStyle: {
    flexGrow: 1,
    flexDirection: 'row',
    backgroundColor: '#ddd'
  },
  thumbnailStyle: {
    height: 80,
    width: 80
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5
  },
  groupInfoStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  statusPicStyle: {
    height: 30,
    width: 30, 
    marginRight: 5
  }
};

export { GroupDetail };
