/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

// import ButtonSquish from 'example/src/ButtonSquish';
import { StyleSheet, View } from 'react-native';
import { SquishButton } from 'react-native-squish-button';
export default function App() {
  return (
    <View style={styles.container}>
      <SquishButton
        width={300}
        height={100}
        color="#4E5372"
        squish={7}
        radius={5}
        text="hello"
        textStyle={{
          color: 'white',
          fontFamily: 'Helvetica',
          fontWeight: 'bold',
          fontSize: 16,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
