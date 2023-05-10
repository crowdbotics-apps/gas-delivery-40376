import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AccountSettingsScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("profile");
      }}><Text style={styles.buttonText}>Edit Profile</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI14");
      }}><Text style={styles.buttonText}>Manage Payments</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI23");
      }}><Text style={styles.buttonText}>Manage Bank Account</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Unsubscribe</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("Privacy Policy");
      }}><Text style={styles.buttonText}>Privacy Policy</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("Terms and Conditions");
      }}><Text style={styles.buttonText}>Terms and Conditions</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI31");
      }}><Text style={styles.buttonText}>Change Password</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI32");
      }}><Text style={styles.buttonText}>Send Feedback</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Delete Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log Off</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default AccountSettingsScreen;