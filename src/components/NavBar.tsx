import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface NavbarProps {
  title: string;
}

export const Navbar = ({title}: NavbarProps) => {
  return (
    <View style={styles.navbar}>
        <Text style={styles.text}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor:'#3949ab',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
