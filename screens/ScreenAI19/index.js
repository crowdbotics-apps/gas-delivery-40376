import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ScheduleAppointmentScreen = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [fastDelivery, setFastDelivery] = useState(false);

  const handleTimeSelection = time => {
    setSelectedTime(time);
  };

  const handleFastDelivery = () => {
    setFastDelivery(!fastDelivery);
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Schedule Appointment</Text>
      <View style={styles.timeContainer}>
        <TouchableOpacity style={[styles.timeButton, selectedTime === '10:00 AM' && styles.selectedTimeButton]} onPress={() => handleTimeSelection('10:00 AM')}>
          <Text style={[styles.timeText, selectedTime === '10:00 AM' && styles.selectedTimeText]}>10:00 AM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.timeButton, selectedTime === '2:00 PM' && styles.selectedTimeButton]} onPress={() => handleTimeSelection('2:00 PM')}>
          <Text style={[styles.timeText, selectedTime === '2:00 PM' && styles.selectedTimeText]}>2:00 PM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.timeButton, selectedTime === '4:00 PM' && styles.selectedTimeButton]} onPress={() => handleTimeSelection('4:00 PM')}>
          <Text style={[styles.timeText, selectedTime === '4:00 PM' && styles.selectedTimeText]}>4:00 PM</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.fastDeliveryButton, fastDelivery && styles.selectedFastDeliveryButton]} onPress={handleFastDelivery}>
        <Text style={[styles.fastDeliveryText, fastDelivery && styles.selectedFastDeliveryText]}>Mark as Fast Delivery</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  timeButton: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center'
  },
  selectedTimeButton: {
    backgroundColor: '#007aff'
  },
  timeText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  selectedTimeText: {
    color: '#fff'
  },
  fastDeliveryButton: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    width: '50%',
    alignItems: 'center'
  },
  selectedFastDeliveryButton: {
    backgroundColor: '#007aff'
  },
  fastDeliveryText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  selectedFastDeliveryText: {
    color: '#fff'
  }
});
export default ScheduleAppointmentScreen;