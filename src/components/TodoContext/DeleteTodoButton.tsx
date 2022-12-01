/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  deleteTodo: () => void;
}

export const DeleteTodoButton = ({ deleteTodo }: Props) => {
  return (
    <Icon.Button
      backgroundColor="#3b5998"
      name="trash"
      onPress={deleteTodo}
      iconStyle={{marginRight: 0}}
    />
  );
};
