import React, { PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';

export const Wrap = ({ children }: PropsWithChildren) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});
