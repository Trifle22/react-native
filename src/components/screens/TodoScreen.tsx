import React from 'react';
import { Text } from 'react-native';
import { Wrap } from '../common/Wrap';
import { ITodo } from '../types/todo';

interface Props {
  todo: ITodo | undefined
}

export const TodoScreen = ({ todo }: Props) => {
  return (
    <Wrap>
      <Text>
      {todo?.title}
      </Text>
    </Wrap>
  );
};
