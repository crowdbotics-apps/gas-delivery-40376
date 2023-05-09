import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';

const CreditCardScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  return <View style={styles.container}>
      <Image source={require('../assets/credit-card.png')} style={styles.cardImage} />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Card Number</Text>
        <TextInput style={styles.input} value={cardNumber} onChangeText={setCardNumber} keyboardType="numeric" maxLength={16} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Card Holder</Text>
        <TextInput style={styles.input} value={cardHolder} onChangeText={setCardHolder} autoCapitalize="words" />
      </View>
      <View style={styles.row}>
        <View style={[styles.inputContainer, styles.halfWidth]}>
          <Text style={styles.label}>Expiry Date</Text>
          <TextInput style={styles.input} value={expiryDate} onChangeText={setExpiryDate} keyboardType="numeric" maxLength={4} />
        </View>
        <View style={[styles.inputContainer, styles.halfWidth]}>
          <Text style={styles.label}>CVV</Text>
          <TextInput style={styles.input} value={cvv} onChangeText={setCvv} keyboardType="numeric" maxLength={3} />
        </View>
      </View>
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
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%'
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  halfWidth: {
    width: '48%'
  }
});
export default CreditCardScreen;