import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  const route = [{
    latitude: 37.78825,
    longitude: -122.4324,
    title: 'Stop 1'
  }, {
    latitude: 37.75825,
    longitude: -122.4624,
    title: 'Stop 2'
  }, {
    latitude: 37.72825,
    longitude: -122.4924,
    title: 'Stop 3'
  }];
  return <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }}>
        {route.map((stop, index) => <Marker key={index} coordinate={stop} title={stop.title} />)}
      </MapView>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: { ...StyleSheet.absoluteFillObject
  }
});
export default MapScreen;