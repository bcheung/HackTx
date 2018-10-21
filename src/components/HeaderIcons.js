import React from 'react';
import { View } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class HeaderIcons extends React.Component {
  render() {
    return (
      <View>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
              title="Open DrawNavigator"
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate('CreateNote')}>
              <Icon name='ios-add-circle-outline' />

            </Button>
          </Right>
        </Header>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   viewStyle: {
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 60,
//     paddingTop: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     elevation: 2,
//     position: 'relative'
//   },
//   textStyles: {
//     fontSize: 20
//   }
// });

// Export component
export { HeaderIcons };
