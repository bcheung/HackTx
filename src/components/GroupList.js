import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { GroupDetail } from './GroupDetail';

class GroupList extends Component {
  state = { groups: [
    {
      name: 'Squad',
      people: 'Simon Hoque, Corrin Alanis'
    },
    {
      name: 'Roadtrip',
      people: 'Anna Sim, Dylan McCoy'
    },
    {
      name: 'Roomies',
      people: 'Brian Cheung, Sam Wang'
    }
  ] };

    // componentWillMount() {
    //     axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //         .then(response => this.setState({ albums: response.data }));
    // }

  renderGroups() {
    return this.state.groups.map(group => 
      <GroupDetail key={group.name} name={group.name} people={group.people} />
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
