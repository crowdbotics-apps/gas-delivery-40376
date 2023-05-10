import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/notification-icon.png')} style={styles.notificationIcon} />
        <Text style={styles.headerText}>Upcoming Orders</Text>
        <TouchableOpacity style={styles.scheduleButton}>
          <Text style={styles.scheduleButtonText}>Schedule Order</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ordersContainer}>
        {
        /* Dummy data for upcoming orders */
      }
        <View style={styles.order}>
          <Text style={styles.orderTitle}>Order #1234</Text>
          <Text style={styles.orderDate}>Delivery Date: 12/05/2021</Text>
        </View>
        <View style={styles.order}>
          <Text style={styles.orderTitle}>Order #5678</Text>
          <Text style={styles.orderDate}>Delivery Date: 15/05/2021</Text>
        </View>
        <View style={styles.order}>
          <Text style={styles.orderTitle}>Order #9012</Text>
          <Text style={styles.orderDate}>Delivery Date: 18/05/2021</Text>
        </View>
      </View>
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.bottomMenuItem}>
          <Image source={require('../assets/account-icon.png')} style={styles.bottomMenuIcon} />
          <Text style={styles.bottomMenuText}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomMenuItem}>
          <Image source={require('../assets/schedule-icon.png')} style={styles.bottomMenuIcon} />
          <Text style={styles.bottomMenuText}>Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomMenuItem}>
          <Image source={require('../assets/messages-icon.png')} style={styles.bottomMenuIcon} />
          <Text style={styles.bottomMenuText}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomMenuItem}>
          <Image source={require('../assets/settings-icon.png')} style={styles.bottomMenuIcon} />
          <Text style={styles.bottomMenuText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  notificationIcon: {
    width: 25,
    height: 25
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  scheduleButton: {
    backgroundColor: '#FF6347',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20
  },
  scheduleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  ordersContainer: {
    flex: 1
  },
  order: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  orderDate: {
    fontSize: 16
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20
  },
  bottomMenuItem: {
    alignItems: 'center'
  },
  bottomMenuIcon: {
    width: 25,
    height: 25,
    marginBottom: 5
  },
  bottomMenuText: {
    fontSize: 12
  }
});
export default HomeScreen;