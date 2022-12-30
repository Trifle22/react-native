import React from 'react';
import { Wrap } from '../common/Wrap';
import { Navbar } from '../NavBar';
import { RootStackParamList } from '../types/navigation';

type Props = RootStackParamList['Todo'];
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
