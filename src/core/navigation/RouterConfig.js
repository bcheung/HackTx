import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';
import Splash from '../../modules/auth/scenes/Splash';
import Initialization from '../../modules/auth/scenes/Initialization';
import Welcome from '../../modules/auth/scenes/Welcome';
import Login from '../../modules/auth/scenes/Login';
import Register from '../../modules/auth/scenes/Register';
import VerifyEmail from '../../modules/auth/scenes/VerifyEmail';
import Home from '../../modules/main/scenes/Home';
import Settings from '../../modules/main/scenes/Settings';
import Groups from '../../modules/groups/scenes/Groups';

const AuthStack = createStackNavigator(
  {
    Welcome: { screen: Welcome },
    Login: { screen: Login },
    Register: { screen: Register },
    VerifyEmail: { screen: VerifyEmail }
  },
  {
    initialRouteName: 'Welcome'
  }
);

// const AnnouncementStack = createStackNavigator(
//   {
//     AnnouncementFeed: { screen: AnnouncementFeed },
//     AnnouncementCreate: { screen: AnnouncementCreate },
//     AnnouncementView: { screen: AnnouncementView }
//   },
//   {
//     initialRouteName: 'AnnouncementFeed'
//     // headerMode: 'none',
//     // mode: 'modal'
//   }
// );

// const PollStack = createStackNavigator(
//   {
//     PollView: { screen: PollView },
//     PollFeed: { screen: PollFeed },
//     PollCreate: { screen: PollCreate },
//     PollResults: { screen: PollResults }
//   },
//   {
//     initialRouteName: 'PollFeed'
//   }
// );

const AppSideBar = createDrawerNavigator(
  {
    Groups: {
      path: '/',
      screen: Groups,
    },
  },
  {
    initialRouteName: 'Groups',
    drawerPosition: 'left',
  }
);

// const AppSwitch = createSwitchNavigator(
//   {
//     // AnnouncementStack,
//     // PollStack,
//     Home: { screen: Home },
//     Groups: { screen: Groups },
//     Settings: { screen: Settings }
//   },
//   {
//     initialRouteName: 'Groups'
//   }
// );

export const RootNavigator = createSwitchNavigator(
  {
    Splash,
    Initialization,
    Auth: AuthStack,
    App: AppSideBar
  },
  {
    initialRouteName: 'Splash'
  }
);
