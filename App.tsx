import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Navbar } from './src/components/NavBar';

export default function App() {
  return (
    <View style={styles.container}>
        <Navbar  title="TODO APP"/>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'flex-start',
},
});
