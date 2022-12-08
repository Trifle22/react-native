/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';

interface Props {
  onPress?: () => void;
}

export const BackButton = ({ onPress }: Props) => {
  return (
      <Icon.Button
      onPress={onPress}
        backgroundColor="#3b5998"
        name="trash"
        iconStyle={{marginRight: 0}}
        style={styles.button}
      />
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 'auto',
  },
});
