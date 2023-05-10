import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CalendarScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Appointments</Text>
        <Image source={require('../assets/calendar.png')} style={styles.icon} />
      </View>
      <View style={styles.appointment}>
        <Text style={styles.date}>Monday, 12th July</Text>
        <View style={styles.details}>
          <Text style={styles.time}>10:00 AM</Text>
          <Text style={styles.description}>Dentist Appointment</Text>
        </View>
      </View>
      <View style={styles.appointment}>
        <Text style={styles.date}>Wednesday, 14th July</Text>
        <View style={styles.details}>
          <Text style={styles.time}>2:00 PM</Text>
          <Text style={styles.description}>Haircut Appointment</Text>
        </View>
      </View>
      <View style={styles.appointment}>
        <Text style={styles.date}>Friday, 16th July</Text>
        <View style={styles.details}>
          <Text style={styles.time}>4:00 PM</Text>
          <Text style={styles.description}>Doctor Appointment</Text>
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  icon: {
    width: 30,
    height: 30
  },
  appointment: {
    marginBottom: 20
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  time: {
    fontSize: 16,
    marginRight: 10
  },
  description: {
    fontSize: 16
  }
});
export default CalendarScreen;