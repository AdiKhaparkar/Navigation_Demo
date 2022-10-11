import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
      <Text>
        Router.js − This is our Router component. We will place it inside
        src/components folder.
      </Text>
      <></>
      <Text>
        Home − Home page folder. Path to this folder is src/components/home. We
        will create two components here HomeContainer.js and HomeButton.js
      </Text>
      <></>
      <Text>
        About − About page folder. Path to this folder is src/components/about.
        We will have AboutContainer.js and AboutButton.js inside.
      </Text>
      <Text>
        Animated.timing() It animates a value over time using various easing
        curve, or by using own function. 
        Animated.event() It maps event directly
        to animated values. 
        Animated. spring() It animate the valueIt tracks the
        velocity of state to create fluid motion as toValue updates.
        Animated.decay() It starts the animations with initial velocity and
        gradually goes slows to stop.
      </Text>
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

export default About;
