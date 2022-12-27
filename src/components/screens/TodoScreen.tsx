import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Wrap } from '../common/Wrap';
import { Navbar } from '../NavBar';
import { RootStackParamList } from '../types/navigation';

type Props = RootStackParamList['Todo'];

export type TodoScreenProps = NativeStackScreenProps<RootStackParamList, 'Todo'> & Props;

export const TodoScreen = ({ todo, navigation }: TodoScreenProps) => {
  console.log(navigation);

  if (todo) {
    return (
      <Wrap>
        <Navbar title={todo.title}/>
      </Wrap>
    );
  }

  return null;

};
