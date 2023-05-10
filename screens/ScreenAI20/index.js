import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, StyleSheet, Image } from 'react-native';

const CalendarScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Appointments</Text>
        <Image source={require('../assets/calendar.png')} style={styles.icon} />
      </View>
      <View style={styles.appointments}>
        <View style={styles.appointment}>
          <Text style={styles.appointmentTitle}>Dentist Appointment</Text>
          <Text style={styles.appointmentTime}>10:00 AM</Text>
        </View>
        <View style={styles.appointment}>
          <Text style={styles.appointmentTitle}>Meeting with Boss</Text>
          <Text style={styles.appointmentTime}>2:00 PM</Text>
        </View>
        <View style={styles.appointment}>
          <Text style={styles.appointmentTitle}>Haircut</Text>
          <Text style={styles.appointmentTime}>5:00 PM</Text>
        </View>
      <Pressable onPress={() => {
        navigation.navigate("ScreenAI19");
      }}><Text style={styles.SlPZKecm}>{"make an appointment"}</Text></Pressable></View>
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
  appointments: {
    flex: 1
  },
  appointment: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20
  },
  appointmentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  appointmentTime: {
    fontSize: 16
  },
  SlPZKecm: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default CalendarScreen;