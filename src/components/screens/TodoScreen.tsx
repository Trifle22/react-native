import React from 'react';
import { Button } from 'react-native';
import { Wrap } from '../common/Wrap';
import { Navbar } from '../NavBar';
import { ITodo } from '../types/todo';

interface Props {
  todo: ITodo | undefined
}

export const TodoScreen = ({ todo }: Props) => {
  if (todo) {
    return (
      <Wrap>
        <Navbar title={todo.title} actionButton={<Button title="lol"/>}/>
      </Wrap>
    );
  }

  return null;

};
