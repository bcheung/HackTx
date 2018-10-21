import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { GroupDetail } from './GroupDetail';

class GroupList extends Component {
  state = { groups: [
    <GroupDetail />,
    <GroupDetail />
  ] };

    // componentWillMount() {
    //     axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //         .then(response => this.setState({ albums: response.data }));
    // }

  renderGroups() {
    return this.state.groups.map(group => 
      <GroupDetail />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderGroups()}
      </ScrollView>
    );
  }
}

export { GroupList };
