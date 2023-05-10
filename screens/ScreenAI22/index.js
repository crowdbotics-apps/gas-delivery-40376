import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const WalletScreen = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState('');

  const handlePay = () => {// handle payment logic
  };

  const handleWithdraw = () => {// handle withdraw logic
  };

  const handleAddBankAccount = () => {// handle add bank account logic
  };

  return <View style={styles.container}>
      <Text style={styles.title}>{"My App Account"}</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Amount</Text>
        <TextInput style={styles.input} placeholder="$0.00" keyboardType="numeric" value={amount} onChangeText={setAmount} />
      </View>
      <TouchableOpacity style={styles.payButton} onPress={handlePay}>
        <Text style={styles.payButtonText}>Pay</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.withdrawButton} onPress={handleWithdraw}>
        <Text style={styles.withdrawButtonText}>Withdraw</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addBankButton} onPress={handleAddBankAccount}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI23");
      }}><Text style={styles.addBankButtonText}>Add Bank Account</Text></Pressable>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10
  },
  payButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  withdrawButton: {
    backgroundColor: '#F44336',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10
  },
  withdrawButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  addBankButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  addBankButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default WalletScreen;