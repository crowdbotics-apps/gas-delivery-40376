import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const ConnectBankScreen = () => {
  const [bankName, setBankName] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [routingNumber, setRoutingNumber] = useState('');
  const [iban, setIban] = useState('');
  const [swift, setSwift] = useState('');

  const handleConnectBank = () => {// handle connect bank logic
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Connect Bank Account</Text>
      <TextInput style={styles.input} placeholder="Bank Name" value={bankName} onChangeText={setBankName} />
      <TextInput style={styles.input} placeholder="Account Name" value={accountName} onChangeText={setAccountName} />
      <TextInput style={styles.input} placeholder="Account Number" value={accountNumber} onChangeText={setAccountNumber} />
      <TextInput style={styles.input} placeholder="Routing Number" value={routingNumber} onChangeText={setRoutingNumber} />
      <TextInput style={styles.input} placeholder="IBAN" value={iban} onChangeText={setIban} />
      <TextInput style={styles.input} placeholder="SWIFT" value={swift} onChangeText={setSwift} />
      <TouchableOpacity style={styles.button} onPress={handleConnectBank}>
        <Text style={styles.buttonText}>Connect Bank</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default ConnectBankScreen;