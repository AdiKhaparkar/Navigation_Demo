import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feed from '../screens/Feed';
import Home from '../screens/Home';
import About from '../screens/About';
import Icon from 'react-native-vector-icons/AntDesign';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Button} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="About"
        component={About}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Feed"
        component={Feed}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};
const Tab = createBottomTabNavigator();
 const Drawer = createDrawerNavigator();

const  MyDrawer=()=>{
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="FeedDrawer" component={Feed} />
      <Drawer.Screen name="AboutDrawer" component={About} />
    </Drawer.Navigator>
  );
}


const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeNavigator}
        options={{
          tabBarIcon: props => <Icon name="home" {...props} />,
          headerRight: () => (
            <Button
              onPress={() => alert('This App is tracking your Location ')}
              title="Info"
              color="#00cc00"
            />
          ),
        }}
      />

      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: props => <Icon name="user" {...props} />,
        }}
      />
      
      <Tab.Screen
        name="Feed"
        component={MyDrawer}
        options={{
          tabBarIcon: props => <Icon name="database" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};



export default AppNavigator;
