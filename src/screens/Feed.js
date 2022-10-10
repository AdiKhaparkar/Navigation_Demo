import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const Feed = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text>FeedScreen</Text>
      <Text>(route.params.productId)</Text>
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
export default Feed;
