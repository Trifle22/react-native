import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChangeStatusButton } from './ChangeStatusButton';
import { DeleteTodoButton } from './DeleteTodoButton';

import { ITodo } from '../types/todo';

interface Props {
  todo: ITodo;
  changeTodoStatus: (id: string) => void;
  deleteTodo: (id: string) => void;
  openTodo: (id: string) => void;
}

export const Todo = ({ todo, changeTodoStatus, deleteTodo: deleteTodoProp, openTodo }: Props) => {

  const deleteTodo = () => {
    deleteTodoProp(todo.id);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onLongPress={() => {
        openTodo(todo.id);
      }}
    >
        <View style={styles.container}>
          <Text style={styles.title}>
            {todo.title}
          </Text>
          <View style={styles.row}>
            <DeleteTodoButton deleteTodo={deleteTodo}/>
            <ChangeStatusButton isCompleted={todo.completed} changeTodoStatus={changeTodoStatus} id={todo.id}/>
          </View>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth:1,
    borderColor: 'rgba(0,0,0,0.1)',
    padding: 3,
  },
  title: {
    fontSize: 22,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
