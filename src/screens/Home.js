import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import About from './About';
import Feed from './Feed';

const Home = () => {
  const navigation = useNavigation();
  const [entryCode, setEntryCode] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.Heading}>HomeScreen</Text>

      <TextInput
        style={styles.TextInput}
        placeholder="Enter Name"
        value={entryCode}
        onChangeText={setEntryCode}
      />
      <Button
        title="TransferData"
        onPress={() => {
          navigation.navigate({
            name: 'Feed',
            params: {data: entryCode},
          });
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate(About)}
        style={styles.Button}>
        <Text>About Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate(Feed, {productId: 'dfg456df1bvd651fgb'})
        }
        style={styles.Button}>
        <Text>Feed</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput: {
    borderWidth: 1,
    borderRadius: 2,
    width: 300,
  },
  Button: {
    borderWidth: 1,
    width: 200,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'rgb(200,150,98)',
  },
  TextInput: {
    fontSize: 40,
    borderWidth: 1,
    width: 250,
    height: 40,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
  },
  Heading: {
    fontSize: 60,
    shadowOffset: {width: -20, height: -8},
    shadowColor: '#171717',
    shadowOpacity: 0.5,
  },
});
export default Home;
