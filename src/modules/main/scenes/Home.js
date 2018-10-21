import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { HomeNav } from '../../../core/navigation/RouterConfig';
import { HeaderIcons, Card } from '../../../components';


class Home extends Component {
  
  renderView() {
    return (
      <View style={{ flexDirection: 'column' }}>
        <HeaderIcons navigation={this.props.navigation} title='Home' />
        <View style={styles.switchButtonContainerStyle}>
          <TouchableOpacity style={styles.switchButtonStyleL}>
            <Text style={{ fontSize: 15 }}>Who I Owe</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.switchButtonStyleR}>
            <Text style={{ fontSize: 15 }}>Who Owes Me</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.switchButtonContainerStyle}> 
          <HomeNav />
        </View> */}
        <Text style={{ fontSize: 60, alignSelf: 'center' }}>Total</Text>
        <View style={{ height: 470, borderWidth: 1, borderColor: '#999', borderRadius: 6, marginLeft: 20, marginRight: 20, flexDirection: 'column', justifyContent: 'flex-start', alignContent: 'center' }}>
          <View style={{}}>
            <View style={{ paddingBottom: 20 }}>
              <Text style={{ fontSize: 50, color: 'green', borderBottomWidth: 2, borderBottomColor: '#aaa', marginTop: 30, alignSelf: 'center' }}>$20.35</Text>
            </View>
          </View>
          <View style={{ paddingVertical: 3, borderBottomLeftRadius: 6, borderBottomRightRadius: 6, borderTopWidth: 2, borderBottomWidth: 1, borderColor: '#999', flexDirection: 'row', justifyContent: 'flex-start' }}>
            <Text style={{ color: 'purple', marginLeft: 10, fontSize: 20 }}>Sam Wang </Text>
            <Text style={{ fontSize: 20 }}>owes me</Text>
            <View style={{ flexGrow: 1 }} />
            <Text style={{ justifyContent: 'flex-end', marginRight: 10, fontSize: 20 }}>$15.15</Text>
          </View>
          <View style={{ paddingVertical: 3, borderBottomLeftRadius: 6, borderBottomRightRadius: 6, borderColor: '#999', flexDirection: 'row', justifyContent: 'flex-start' }}>
            <Text style={{ color: 'purple', marginLeft: 10, fontSize: 20 }}>Dylan McCoy </Text>
            <Text style={{ fontSize: 20 }}>owes me</Text>
            <View style={{ flexGrow: 1 }} />
            <Text style={{ justifyContent: 'flex-end', marginRight: 10, fontSize: 20 }}>$5.20</Text>
          </View>
            
            
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.renderView()}
      </View>
    );
  }
}

const styles = {
  switchButtonStyleL: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#777',
    flexGrow: 1,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  switchButtonStyleR: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#777',
    flexGrow: 1,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#bbb'
  },
  switchButtonContainerStyle: {
    borderRadius: 10,
    backgroundColor: '#eee',
    marginTop: 5,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'center'
  }
};

const mapStateToProps = state => {
  const { user } = state.auth;
  return { user };
};

export default connect(
  mapStateToProps,
  null
)(Home);
