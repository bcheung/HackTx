import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { logoutRequest } from '../../auth/actions';
import { Card, CardSection, Button, Spinner, HeaderIcons } from '../../../components';

class SettingsScreen extends Component {
  onLogout = () => {
    this.props.logoutRequest();
  }
  
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return <Button onPress={this.onLogout}>Logout</Button>;
  }

  render() {
    return (
		<View style={{ flex: 1 }}>
        <HeaderIcons navigation={this.props.navigation} title='Groups' />
        <CardSection
          style={{
            alignSelf: 'center',
            left: 0,
            right: 0,
            bottom: 40,
            top: 250,
            height: 200,
            padding: 20
          }}

        >
          {this.renderButton()}
        </CardSection>
      </View>
        
    );
  }
}


export default connect(null, { logoutRequest })(SettingsScreen);
