import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Image, StyleSheet } from 'react-native';

const InitialScreen = () => {
  const navigation = useNavigation();
  return <Pressable onPress={() => {
    navigation.navigate("signup");
  }}><View style={styles.container}>
      <Image source={require('../assets/placeholder-image.jpg')} style={styles.image} />
    </View></Pressable>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  }
});
export default InitialScreen;