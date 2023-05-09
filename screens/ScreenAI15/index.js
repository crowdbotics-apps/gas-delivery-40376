import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PaymentScreen = () => {
  const navigation = useNavigation();
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelection = card => {
    setSelectedCard(card);
  };

  const handlePayment = () => {// handle payment logic
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Select a Credit Card</Text>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={[styles.card, selectedCard === 'card1' && styles.selectedCard]} onPress={() => handleCardSelection('card1')}>
          <Image source={require('../assets/card1.png')} style={styles.cardImage} />
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI14");
        }}><Text style={styles.cardNumber}>**** **** **** 1234</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, selectedCard === 'card2' && styles.selectedCard]} onPress={() => handleCardSelection('card2')}>
          <Image source={require('../assets/card2.png')} style={styles.cardImage} />
          <Text style={styles.cardNumber}>**** **** **** 5678</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Pressable onPress={() => {
        navigation.navigate("profile");
      }}><Text style={styles.payButtonText}>Pay $50.00</Text></Pressable>
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
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 20,
    width: '48%',
    alignItems: 'center'
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: '#007aff'
  },
  cardImage: {
    width: 50,
    height: 50,
    marginBottom: 10
  },
  cardNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 2
  },
  payButton: {
    backgroundColor: '#007aff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default PaymentScreen;