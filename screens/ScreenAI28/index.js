import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const OrderCompletedPopup = ({
  onClose
}) => {
  const [gasFilled, setGasFilled] = useState('');

  const handleOrderCompleted = () => {
    // handle order completed logic here
    onClose();
  };

  return <View style={styles.container}>
      <View style={styles.popup}>
        <Text style={styles.title}>Order Completed</Text>
        <Text style={styles.subtitle}>Total amount of gas filled:</Text>
        <TextInput style={styles.input} keyboardType="numeric" value={gasFilled} onChangeText={setGasFilled} />
        <TouchableOpacity style={styles.button} onPress={handleOrderCompleted}>
          <Text style={styles.buttonText}>Order Completed</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  popup: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
    fontSize: 16
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default OrderCompletedPopup;