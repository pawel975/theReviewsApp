import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import About from '../screens/about';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'GameZone',
      // headerStyle: {backgroundColor: '#333'},
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
      // headerStyle: {backgroundColor: '#eee'},
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {backgroundColor: '#eee', height: 60},
  },
});

export default createAppContainer(HomeStack);

//NavigationOptions are options which we can customize section with. I noticed that section name is automatically taken from the name of the section, until we specify the navigationOption of title.
