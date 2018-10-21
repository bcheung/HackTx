import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { GroupList, HeaderIcons } from '../../../components';

class Groups extends Component {
  static navigationOptions = {
    tabBarLabel: 'Screen Group',
    drawerIcon: () => {
      return (
        <Text>Test</Text>
      );
    }
    // headerRight: (
    //   <Button
    //     onPress={() => alert('This is a button!')}
    //     title="Info"
    //     color="#fff"
    //   />
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <HeaderIcons navigation={this.props.navigation} title='Groups' />
        <GroupList />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  null
)(Groups);
