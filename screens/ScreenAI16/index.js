import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/notification-icon.png')} style={styles.notificationIcon} />
      </View>
      <View style={styles.ordersContainer}>
        <Text style={styles.ordersTitle}>Upcoming Orders</Text>
        <View style={styles.order}>
          <Image source={require('../assets/placeholder-image.png')} style={styles.orderImage} />
          <View style={styles.orderDetails}>
            <Text style={styles.orderName}>Order #1234</Text>
            <Text style={styles.orderDate}>Delivery Date: 01/01/2022</Text>
          </View>
        </View>
        <View style={styles.order}>
          <Image source={require('../assets/placeholder-image.png')} style={styles.orderImage} />
          <View style={styles.orderDetails}>
            <Text style={styles.orderName}>Order #5678</Text>
            <Text style={styles.orderDate}>Delivery Date: 01/02/2022</Text>
          </View>
        </View>
      <Pressable onPress={() => {
        navigation.navigate("ScreenAI21");
      }}><Text style={styles.GsRFMjRk}>{"Notification icon"}</Text></Pressable></View>
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.bottomMenuItem}>
          <Image source={require('../assets/map-icon.png')} style={styles.bottomMenuIcon} />
          <Text style={styles.bottomMenuText}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomMenuItem}>
          <Image source={require('../assets/history-icon.png')} style={styles.bottomMenuIcon} />
          <Text style={styles.bottomMenuText}>Order History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomMenuItem}>
          <Image source={require('../assets/message-icon.png')} style={styles.bottomMenuIcon} />
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
    backgroundColor: '#fff'
  },
  header: {
    height: 80,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20
  },
  notificationIcon: {
    width: 30,
    height: 30
  },
  ordersContainer: {
    flex: 1,
    padding: 20
  },
  ordersTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  order: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  orderImage: {
    width: 60,
    height: 60,
    marginRight: 20
  },
  orderDetails: {
    flex: 1
  },
  orderName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  orderDate: {
    fontSize: 14,
    color: '#A9A9A9'
  },
  bottomMenu: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  bottomMenuItem: {
    alignItems: 'center'
  },
  bottomMenuIcon: {
    width: 30,
    height: 30,
    marginBottom: 5
  },
  bottomMenuText: {
    fontSize: 12,
    color: '#A9A9A9'
  },
  GsRFMjRk: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default HomeScreen;