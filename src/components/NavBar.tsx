import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BackButton } from './common/BackButton';

interface NavbarProps {
  title: string;
  goToMainScreen?: () => void;
  showGoBackButton?: boolean;
}

export const Navbar = ({title, goToMainScreen, showGoBackButton}: NavbarProps) => {
  return (
    <View style={styles.navbar}>
          {showGoBackButton && <BackButton onPress={goToMainScreen}/>}
        <Text style={styles.text}>
        {title}
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
