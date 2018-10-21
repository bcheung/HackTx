import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { GroupDetail } from '../../../components';

class Home extends Component {
  renderView() {
    if (this.props.user !== null) {
      return (
        <View>
          <Text>{this.props.user.uid}</Text>
          <Text>{this.props.user.firstName}</Text>
          <Text>{this.props.user.lastName}</Text>
          <Text>{this.props.user.email}</Text>
        </View>
      );
    }

    return (
      <Text>Props not loaded.</Text>
    );
  }

  render() {
    return (
      <GroupDetail />
    );
  }
}

const mapStateToProps = state => {
  const { user } = state.auth;
  return { user };
};

export default connect(
  mapStateToProps,
  null
)(Home);
