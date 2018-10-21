import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator
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
import CreateNote from '../../modules/create_note/scenes/CreateNote';

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

export const HomeNav = createMaterialTopTabNavigator(
  {
    Settings: { screen: Settings },
    Other: { screen: Settings }
  },
  {
    flex: 1,
    flexGrow: 1, 
    height: 200,
    initialRouteName: 'Settings',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      style: {
        borderRadius: 10,
        borderColor: '#aaa',
        borderWidth: 1,
        backgroundColor: '#eee',
        flexGrow: 1,
        justifyContent: 'center'
      },
      labelStyle: {
        color: 'black'
      },
      indicatorStyle: {
        backgroundColor: 'rgba(52, 52, 52, 0)'
      },
      activeColor: '#aaa'
    }
  }
);

const AppSideBar = createDrawerNavigator(
  {
    Home: { screen: Home },
    Groups: { screen: Groups
    }
  },
  {
    initialRouteName: 'Groups',
    drawerPosition: 'left'
  }
);

const AppStack = createStackNavigator(
  {
	AppSideBar,
    CreateNote: { screen: CreateNote }
  },
  {
	initialRouteName: 'AppSideBar',
	headerMode: 'none'
  }
);

export const RootNavigator = createSwitchNavigator(
  {
    Splash,
    Initialization,
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: 'Splash'
  }
);
