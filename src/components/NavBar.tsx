import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface NavbarProps {
  title: string;
}

export const Navbar = (props: NavbarProps) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 80,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor:'#3949ab',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
