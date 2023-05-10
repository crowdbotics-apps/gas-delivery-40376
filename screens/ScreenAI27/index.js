import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LocationDetailsScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Location Details</Text>
      </View>
      <View style={styles.content}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI28");
      }}><View style={styles.detailsContainer}>
          <View style={styles.detail}>
            <Text style={styles.detailTitle}>Address:</Text>
            <Text style={styles.detailText}>123 Main St, Anytown USA</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailTitle}>Customer Name:</Text>
            <Text style={styles.detailText}>John Doe</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailTitle}>Time to Destination:</Text>
            <Text style={styles.detailText}>30 minutes</Text>
          </View>
        </View></Pressable>
        <TouchableOpacity style={styles.button}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI25");
        }}><Text style={styles.buttonText}>Send Message</Text></Pressable>
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
    backgroundColor: '#2f3640',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between'
  },
  detailsContainer: {
    backgroundColor: '#f1f2f6',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20
  },
  detail: {
    flexDirection: 'row',
    marginBottom: 10
  },
  detailTitle: {
    fontWeight: 'bold',
    marginRight: 10
  },
  detailText: {
    flex: 1
  },
  button: {
    backgroundColor: '#2f3640',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default LocationDetailsScreen;