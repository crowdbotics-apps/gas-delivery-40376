import { Pressable } from "react-native";
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
const conversations = [{
  id: '1',
  name: 'John Doe',
  message: 'Hey, how are you?',
  time: '10:30 AM',
  image: require('../assets/images/profile1.png')
}, {
  id: '2',
  name: 'Jane Smith',
  message: 'Can you send me the report?',
  time: 'Yesterday',
  image: require('../assets/images/profile2.png')
}, {
  id: '3',
  name: 'Bob Johnson',
  message: 'See you later!',
  time: 'Monday',
  image: require('../assets/images/profile3.png')
}];

const MessagesScreen = () => {
  const renderItem = ({
    item
  }) => <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.profileImage} />
      <View style={styles.itemDetails}>
        <Pressable><Text style={styles.name}>{item.name}</Text></Pressable>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </View>;

  return <View style={styles.container}>
      <FlatList data={conversations} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  itemDetails: {
    flex: 1
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  message: {
    fontSize: 16,
    color: '#666'
  },
  time: {
    fontSize: 14,
    color: '#999'
  }
});
export default MessagesScreen;