import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigations';

const MyTheme = {
  dark: true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'grey',
    card: "black",
    text: 'white',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme} >
      <AppNavigator   />
    </NavigationContainer>
  );
};

export default App;
