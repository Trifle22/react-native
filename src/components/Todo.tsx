import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ChangeStatusButton } from './ChangeStatusButton';

import { ITodo } from './types/todo';

interface Props {
  todo: ITodo;
  changeTodoStatus: (id: string) => void;
}

export const Todo = ({ todo, changeTodoStatus }: Props) => {

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
          {todo.title}
        </Text>
        <ChangeStatusButton isCompleted={todo.completed} changeTodoStatus={changeTodoStatus} id={todo.id}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 1,
    borderWidth:1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: 22,
  },
});
