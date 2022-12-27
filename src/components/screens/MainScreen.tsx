import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Wrap } from '../common/Wrap';
import {Navbar} from '../NavBar';
import { AddTodoForm } from '../TodoContext/AddTodoForm';
import { TodosList } from '../TodoContext/TodosList';
import { RootStackParamList } from '../types/navigation';

type Props = RootStackParamList['Main'];

export type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'Main'> & Props;

export const MainScreen = ({
  route,
  navigation,
  addTodo,
  todos,
  changeTodoStatus,
  deleteTodo,
  openTodo,
  }: MainScreenProps) => {
    console.log(navigation, route);

  return (
    <Wrap>
      <Navbar title="TODO APP" />
      <AddTodoForm addTodo={addTodo} />
      <TodosList data={todos} changeTodoStatus={changeTodoStatus} deleteTodo={deleteTodo} openTodo={openTodo} />
    </Wrap>
    );
};
