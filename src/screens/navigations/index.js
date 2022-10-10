import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feed from '../Feed';
import Home from '../Home';
import About from '../About';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: true}}
      />
      <HomeStack.Screen name="About" component={About} />
      <HomeStack.Screen name="Feed" component={Feed} />
    </HomeStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default AppNavigator;
