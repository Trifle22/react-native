import React from 'react';
import { Wrap } from '../common/Wrap';
import {Navbar} from '../NavBar';
import { AddTodoForm } from '../TodoContext/AddTodoForm';
import { TodosList } from '../TodoContext/TodosList';
import { ITodo } from '../types/todo';

interface Props {
  addTodo: (title: string) => void;
  todos: ITodo[];
  changeTodoStatus: (id: string) => void;
  deleteTodo: (id: string) => void;
  openTodo: (id: string) => void;
  clearOpenedTodoId?: () => void;
}

export const MainScreen = ({ addTodo, todos, changeTodoStatus, deleteTodo, openTodo }: Props) => {
  return (
    <Wrap>
      <Navbar title="TODO APP" />
      <AddTodoForm addTodo={addTodo} />
      <TodosList data={todos} changeTodoStatus={changeTodoStatus} deleteTodo={deleteTodo} openTodo={openTodo} />
    </Wrap>
    );
};
