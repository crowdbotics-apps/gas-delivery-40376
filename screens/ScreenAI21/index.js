import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
const notifications = [{
  id: 1,
  title: 'New message',
  message: 'You have a new message from John Doe'
}, {
  id: 2,
  title: 'New follower',
  message: 'You have a new follower on Instagram'
}, {
  id: 3,
  title: 'New email',
  message: 'You have a new email from Jane Doe'
}, {
  id: 4,
  title: 'New like',
  message: 'Your post has a new like'
}, {
  id: 5,
  title: 'New comment',
  message: 'Your post has a new comment'
}];

const NotificationListScreen = () => {
  const renderItem = ({
    item
  }) => <View style={styles.notification}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </View>;

  return <View style={styles.container}>
      <FlatList data={notifications} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  notification: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  message: {
    fontSize: 16,
    color: '#666'
  }
});
export default NotificationListScreen;