import React from 'react';
import { Wrap } from '../common/Wrap';
import { Navbar } from '../NavBar';
import { ITodo } from '../types/todo';

interface Props {
  todo: ITodo | undefined;
  goToMainScreen: () => void;
}

export const TodoScreen = ({ todo }: Props) => {
  if (todo) {
    return (
      <Wrap>
        <Navbar title={todo.title}/>
      </Wrap>
    );
  }

  return null;

};
