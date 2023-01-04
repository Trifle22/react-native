import React from 'react';
import { View } from 'react-native';
import { Navigator } from './src/components/navigation/Navigator';

export default function App() {

  return (
    // eslint-disable-next-line react-native/no-inline-styles
      <View style={{ flex: 1 }}>
        <Navigator />
      </View>
  );
}
