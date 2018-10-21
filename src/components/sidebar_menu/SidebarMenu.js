import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from './SidebarStyles';
import { StackNavigator } from "react-navigation";

class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Text style={styles.sectionHeadingStyle} onPress={this.navigateToScreen('Profile')}>
                        Profile
                    </Text>
                    {/* <View style={styles.navSectionStyle}>
                        <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page1')}>
                            Page1
                        </Text>
                    </View> */}
                </View>

                <View>
                    <Text style={styles.sectionHeadingStyle} onPress={this.navigateToScreen('Groups')}>
                        Groups
                    </Text>
                    {/* <View style={styles.navSectionStyle}>
                        <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page2')}>
                            Page2
                        </Text>
                        <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page3')}>
                            Page3
                        </Text>
                    </View> */}
                </View>

                <View>
                    <Text style={styles.sectionHeadingStyle}>
                        Friends
                    </Text>
                </View>
            </ScrollView>
            <View style={styles.footerContainer}>
                <Text>Settings</Text>
            </View>
        </View>

        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;
