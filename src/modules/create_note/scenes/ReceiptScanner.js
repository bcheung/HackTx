import React, { Component } from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
import { Constants, Permissions, ImagePicker } from 'expo';

export default class App extends Component {
  state = {
    image: null
  };
  //   pickFromGallery = async () => {
  //     const permissions = Permissions.CAMERA_ROLL;
  //     const { status } = await Promise.all([
  // 		Permissions.askAsync(Permissions.CAMERA),
  // 		Permissions.askAsync(Permissions.CAMERA_ROLL)
  // 	]);
  //     console.log(permissions, status);
  //     if (status === 'granted') {
  //       const image = await ImagePicker.launchImageLibraryAsync({
  //         mediaTypes: 'Images'
  //       }).catch(error => console.log(permissions, { error }));
  //       console.log(permissions, 'SUCCESS', image);
  //     }
  //   };

  pickFromCamera = async () => {
    const permissions = Permissions.CAMERA;
    const results = await Promise.all([
      Permissions.askAsync(Permissions.CAMERA),
      Permissions.askAsync(Permissions.CAMERA_ROLL)
    ]);
    if (results.some(({ status }) => status === 'granted')) {
      const image = await ImagePicker.launchCameraAsync({
        mediaTypes: 'Images'
      }).catch(error => console.log(permissions, { error }));
      console.log(permissions, 'SUCCESS', image);
      if (!image.cancelled) {
        this.setState({ image: image.uri });
      }
    }
  };

  render() {
    const { image } = this.state;
    return (
      <View style={styles.container}>
        <Button title="Pick from Camera" onPress={this.pickFromCamera} />
        {/* <Button title="Pick from Gallery" onPress={this.pickFromGallery} /> */}
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1'
  }
});
