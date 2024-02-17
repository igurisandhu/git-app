import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export const Map = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.7749, // Example latitude
          longitude: -122.4194, // Example longitude
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Add markers, polygons, etc. here */}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
