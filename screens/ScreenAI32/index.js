import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const FeedbackScreen = () => {
  const [message, setMessage] = useState('');

  const handleSendFeedback = () => {// handle sending feedback logic
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Send Feedback</Text>
      <TextInput style={styles.input} placeholder="Type your feedback here" value={message} onChangeText={setMessage} multiline />
      <TouchableOpacity style={styles.button} onPress={handleSendFeedback}>
        <Text style={styles.buttonText}>Submit</Text>
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
  input: {
    width: '100%',
    height: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default FeedbackScreen;