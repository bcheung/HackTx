import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Switch,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  LayoutAnimation
} from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Card, CardSection, Button } from '../../../components';

const items = [
  {
    title: 'Friends',
    id: 0,
    children: [
      {
        title: 'Brian',
        id: 10
      },
      {
        title: 'Sean',
        id: 11
      },
      {
        title: 'Anna',
        id: 13
      },
      {
        title: 'Sam',
        id: 14
      },
      {
        title: 'Dylan',
        id: 15
      },
      {
        title: 'Corrin',
        id: 17
      },
      {
        title: 'Thanh',
        id: 18
      },
      {
        title: 'Simon',
        id: 19
      },
      {
        title: 'Elizabeth',
        id: 20
      },
      {
        title: 'Michael',
        id: 21
      },
      {
        title: 'Bethany',
        id: 22
      },
      {
        title: 'Brittany',
        id: 23
      },
      {
        title: 'Chad',
        id: 24
      },
      {
        title: 'Brad',
        id: 25
      }
    ]
  },
  {
    title: 'Groups',
    id: 1,
    children: [
      {
        title: 'Nooces',
        id: 26
      },
      {
        title: 'Castle',
        id: 27
      },
      {
        title: 'Phi Mu ALpha',
        id: 28
      },
      {
        title: 'Phi Iota Gamma',
        id: 29
      }
    ]
  }
];
// const items2 =
//   [{
//     title: 'Plants',
//     id: 2,
//     children: [
//       {
//         title: "Mother In Law's Tongue",
//         id: 30,
//       },
//       {
//         title: 'Yucca',
//         id: 31,
//       },
//       {
//         title: 'Monsteria',
//         id: 32,
//       },
//       {
//         title: 'Palm',
//         id: 33,
//       },

//     ],
//   }]
const items2 = [];
for (let i = 0; i < 100; i++) {
  items2.push({
    id: i,
    title: `item ${i}`,
    children: [
      {
        id: `10${i}`,
        title: `child 10${i}`
      },
      {
        id: `11${i}`,
        title: `child 11${i}`
      },
      {
        id: `12${i}`,
        title: `child 12${i}`
      }
    ]
  });
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#333'
  },
  welcome2: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 20
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: '#dadada',
    marginBottom: 20
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 20
  },
  label: {
    fontWeight: 'bold'
  },
  switch: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  textStyle: {
    alignSelf: 'center',
    textAlign: 'center',
    color: '#A2A2A2',
    fontSize: 15,
    fontWeight: '500',
    paddingTop: 18,
    paddingBottom: 18
  },
  buttonStyle: {
    alignSelf: 'center',
    backgroundColor: '#FFE6A7',
    // height: 50,
    width: 300,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFE6A7',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    marginTop: 5
  },
  buttonStyle2: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
    flex: 1,
    height: 250,
    borderColor: 'gray',
    shadowOpacity: 0
  }
});
const accentMap = {
  â: 'a',
  Â: 'A',
  à: 'a',
  À: 'A',
  á: 'a',
  Á: 'A',
  ã: 'a',
  Ã: 'A',
  ê: 'e',
  Ê: 'E',
  è: 'e',
  È: 'E',
  é: 'e',
  É: 'E',
  î: 'i',
  Î: 'I',
  ì: 'i',
  Ì: 'I',
  í: 'i',
  Í: 'I',
  õ: 'o',
  Õ: 'O',
  ô: 'o',
  Ô: 'O',
  ò: 'o',
  Ò: 'O',
  ó: 'o',
  Ó: 'O',
  ü: 'u',
  Ü: 'U',
  û: 'u',
  Û: 'U',
  ú: 'u',
  Ú: 'U',
  ù: 'u',
  Ù: 'U',
  ç: 'c',
  Ç: 'C'
};
const tintColor = '#174A87';

const Loading = props =>
  props.hasErrored ? (
    <TouchableWithoutFeedback onPress={props.fetchCategories}>
      <View style={styles.center}>
        <Text>oops... something went wrong. Tap to reload</Text>
      </View>
    </TouchableWithoutFeedback>
  ) : (
    <View style={styles.center}>
      <ActivityIndicator size="large" />
    </View>
  );

const Toggle = props => (
  <TouchableWithoutFeedback onPress={() => props.onPress(!props.val)} disabled={props.disabled}>
    <View style={styles.switch}>
      <Text style={styles.label}>{props.name}</Text>
      <Switch onTintColor={tintColor} onValueChange={v => props.onPress(v)} value={props.val} />
    </View>
  </TouchableWithoutFeedback>
);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      items: null,
      loading: false,
      selectedItems: [],
      selectedItems2: [],
      selectedItemObjects: [],
      currentItems: [],
      showDropDowns: false,
      single: false,
      readOnlyHeadings: false,
      highlightChildren: false,
      selectChildren: false,
      hasErrored: false
    };
    this.termId = 100;
  }

  componentWillMount() {
    // this.fetchCategories()
    this.pretendToLoad();
  }
  componentDidMount() {
    // programatically opening the select
    // this.SectionedMultiSelect._toggleSelector();
  }

  getProp = (object, key) => object && this.removerAcentos(object[key]);

  rejectProp = (items, fn) => items.filter(fn);

  pretendToLoad = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, items });
    }, 4000);
  };

  // testing a custom filtering function that ignores accents
  removerAcentos = s => {
    return s.replace(/[\W\[\] ]/g, a => {
      return accentMap[a] || a;
    });
  };

  filterItems = (searchTerm, items, { subKey, displayKey, uniqueKey }) => {
    let filteredItems = [];
    let newFilteredItems = [];
    items.forEach(item => {
      const parts = this.removerAcentos(searchTerm.trim()).split(/[[ \][)(\\/?\-:]+/);
      const regex = new RegExp(`(${parts.join('|')})`, 'i');
      if (regex.test(this.getProp(item, displayKey))) {
        filteredItems.push(item);
      }
      if (item[subKey]) {
        const newItem = Object.assign({}, item);
        newItem[subKey] = [];
        item[subKey].forEach(sub => {
          if (regex.test(this.getProp(sub, displayKey))) {
            newItem[subKey] = [...newItem[subKey], sub];
            newFilteredItems = this.rejectProp(
              filteredItems,
              singleItem => item[uniqueKey] !== singleItem[uniqueKey]
            );
            newFilteredItems.push(newItem);
            filteredItems = newFilteredItems;
          }
        });
      }
    });
    return filteredItems;
  };

  onSelectedItemsChange = selectedItems => {
    const filteredItems = selectedItems.filter(val => !this.state.selectedItems2.includes(val));
    this.setState({ selectedItems: filteredItems });
    console.log(selectedItems);
  };

  onSelectedItemsChange2 = selectedItems => {
    const filteredItems = selectedItems.filter(val => !this.state.selectedItems.includes(val));
    this.setState({ selectedItems2: filteredItems });
  };
  onConfirm = () => {
    this.setState({ currentItems: this.state.selectedItems });
  };
  onCancel = () => {
    this.SectionedMultiSelect._removeAllItems();

    this.setState({
      selectedItems: this.state.currentItems
    });
    console.log(this.state.selectedItems);
  };
  onSelectedItemObjectsChange = selectedItemObjects => {
    this.setState({ selectedItemObjects });
    console.log(selectedItemObjects);
  };
  onExpandDropDownsToggle = expandDropDowns => {
    this.setState({ expandDropDowns });
  };
  onShowDropDownsToggle = showDropDowns => {
    this.setState({ showDropDowns });
  };
  onReadOnlyHeadingsToggle = readOnlyHeadings => {
    this.setState({ readOnlyHeadings });
  };
  onSingleToggle = single => {
    this.setState({ single });
  };

  onHighlightChildrenToggle = highlightChildren => {
    this.setState({ highlightChildren });
  };
  onSelectChildrenToggle = selectChildren => {
    this.setState({ selectChildren });
  };
  fetchCategories = () => {
    this.setState({ hasErrored: false });
    fetch('http://www.mocky.io/v2/5a5573a22f00005c04beea49?mocky-delay=500ms', {
      headers: 'no-cache'
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ cats: responseJson });
      })
      .catch(error => {
        this.setState({ hasErrored: true });
        throw error.message;
      });
  };
  filterDuplicates = items =>
    items.sort().reduce((accumulator, current) => {
      const length = accumulator.length;
      if (length === 0 || accumulator[length - 1] !== current) {
        accumulator.push(current);
      }
      return accumulator;
    }, []);

  noResults = (
    <View key="a" style={styles.center}>
      <Text>Sorry! No results...</Text>
    </View>
  );

  handleAddSearchTerm = () => {
    const searchTerm = this.SectionedMultiSelect._getSearchTerm();
    const id = (this.termId += 1);
    if (
      searchTerm.length &&
      !(this.state.items || []).some(item => item.title.includes(searchTerm))
    ) {
      const newItem = { id, title: searchTerm };
      this.setState(prevState => ({ items: [...(prevState.items || []), newItem] }));
      this.onSelectedItemsChange([...this.state.selectedItems, id]);
      this.SectionedMultiSelect._submitSelection();
    }
  };

  renderSelectText = () => {
    const { selectedItemObjects } = this.state;

    return selectedItemObjects.length
      ? `I like ${selectedItemObjects
          .map((item, i) => {
            let label = `${item.title}, `;
            if (i === selectedItemObjects.length - 2) label = `${item.title} and `;
            if (i === selectedItemObjects.length - 1) label = `${item.title}.`;
            return label;
          })
          .join('')}`
      : 'Add Recipient';
  };
  searchAdornment = searchTerm => {
    return searchTerm.length ? (
      <TouchableOpacity
        style={{ alignItems: 'center', justifyContent: 'center' }}
        onPress={this.handleAddSearchTerm}
      >
        <View>
          <Icon size={18} style={{ marginHorizontal: 15 }} name="add" />
        </View>
      </TouchableOpacity>
    ) : null;
  };
  onToggleSelector = toggled => {
    console.log('selector is ', toggled ? 'open' : 'closed');
  };

  render() {
    return (
      <ScrollView
        keyboardShouldPersistTaps="always"
        style={{ backgroundColor: '#f8f8f8' }}
        contentContainerStyle={styles.container}
      >
        <Text style={styles.welcome2}>Split Bill</Text>
        <SectionedMultiSelect
          items={this.state.items}
          ref={SectionedMultiSelect => (this.SectionedMultiSelect = SectionedMultiSelect)}
          uniqueKey="id"
          subKey="children"
          displayKey="title"
          showCancelButton
          loading={this.state.loading}
          // filterItems={this.filterItems}
          // alwaysShowSelectText
          searchAdornment={searchTerm => this.searchAdornment(searchTerm)}
          renderSelectText={this.renderSelectText}
          // noResultsComponent={this.noResults}
          loadingComponent={
            <Loading hasErrored={this.state.hasErrored} fetchCategories={this.fetchCategories} />
          }
          chipRemoveIconComponent={
            <Icon
              style={{
                fontSize: 18,
                marginHorizontal: 6
              }}
            >
              cancel
            </Icon>
          }
          //  cancelIconComponent={<Text style={{color:'white'}}>Cancel</Text>}
          showDropDowns={this.state.showDropDowns}
          expandDropDowns={this.state.expandDropDowns}
          animateDropDowns={false}
          readOnlyHeadings={this.state.readOnlyHeadings}
          single={this.state.single}
          showRemoveAll
          selectChildren={this.state.selectChildren}
          highlightChildren={this.state.highlightChildren}
          //  hideSearch
          //  itemFontFamily={fonts.boldCondensed}
          onSelectedItemsChange={this.onSelectedItemsChange}
          onSelectedItemObjectsChange={this.onSelectedItemObjectsChange}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
          selectedItems={this.state.selectedItems}
          colors={{ primary: this.state.selectedItems.length ? 'forestgreen' : 'crimson' }}
          itemNumberOfLines={3}
          selectLabelNumberOfLines={3}
          styles={{
            // chipText: {
            //   maxWidth: Dimensions.get('screen').width - 90,
            // },
            // itemText: {
            //   color: this.state.selectedItems.length ? 'black' : 'lightgrey'
            // },
            selectedItemText: {
              color: 'blue'
            },
            // subItemText: {
            //   color: this.state.selectedItems.length ? 'black' : 'lightgrey'
            // },
            selectedSubItemText: {
              color: 'blue'
            }
          }}
          cancelIconComponent={<Icon size={20} name="close" style={{ color: 'white' }} />}
        />

        <CardSection>
          <Button style={styles.buttonStyle} onPress={this.pickFromCamera}>
            <Text style={styles.textStyle}>Scan</Text>
          </Button>
        </CardSection>
        <View>
          <View style={styles.border}>
            <Text style={styles.heading}>Details</Text>
          </View>
          <CardSection>
            <Button style={styles.buttonStyle2}>
              <Text style={styles.textStyle}>Enter Details</Text>
            </Button>
          </CardSection>
        </View>
        <CardSection>
          <Button style={styles.buttonStyle}>
            <Text style={styles.textStyle}>Request</Text>
          </Button>
        </CardSection>
      </ScrollView>
    );
  }
}
