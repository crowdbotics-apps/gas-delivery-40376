import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SubscriptionScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Choose Your Plan</Text>
        <Text style={styles.subtitle}>Upgrade to premium to unlock all features</Text>
      </View>
      <View style={styles.tiersContainer}>
        <TouchableOpacity style={styles.tier}>
          
          <Text style={styles.tierTitle}>Bronze</Text>
          <Text style={styles.tierPrice}>$9.99/month</Text>
          <Text style={styles.tierDescription}>Access to basic features</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tier}>
          
          <Text style={styles.tierTitle}>Silver</Text>
          <Text style={styles.tierPrice}>$19.99/month</Text>
          <Text style={styles.tierDescription}>Access to advanced features</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tier}>
          
          <Text style={styles.tierTitle}>Gold</Text>
          <Text style={styles.tierPrice}>$29.99/month</Text>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI15");
        }}><Text style={styles.tierDescription}>Access to all features</Text></Pressable>
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
    marginBottom: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    color: '#666'
  },
  tiersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tier: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10,
    alignItems: 'center'
  },
  tierTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  tierPrice: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10
  },
  tierDescription: {
    fontSize: 14,
    color: '#999'
  }
});
export default SubscriptionScreen;