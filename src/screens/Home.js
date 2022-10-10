import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import About from './About';
import Feed from './Feed';
const Home = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title='About Screen' onPress={()=>navigation.navigate(About)} />
      <Button title='Feed' onPress={()=>navigation.navigate(Feed, {
        productId:"dfg456df1bvd651fgb"
      })} />

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;
