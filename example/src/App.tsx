import * as React from 'react';

// import ButtonSquish from 'example/src/ButtonSquish';
import { StyleSheet, View } from 'react-native';
import { SquishButton } from 'react-native-squish-button';
export default function App() {
  return (
    <View style={styles.container}>
      <SquishButton
        width={300}
        height={300}
        color="#4E5372"
        squish={7}
        spacing={100}
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
