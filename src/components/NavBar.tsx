import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface NavbarProps {
  title: string;
  actionButton?: React.ReactElement<any, any>;
}

export const Navbar = ({title, actionButton}: NavbarProps) => {
  return (
    <View style={styles.navbar}>
      <>
        {actionButton}
        <Text style={styles.text}>
          {title}
        </Text>
      </>
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
