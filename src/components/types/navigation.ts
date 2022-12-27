import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainScreenProps } from '../screens/MainScreen';
import { ITodo } from './todo';

export type RootStackParamList = {
  Main: {
    addTodo: (title: string) => void,
    todos: ITodo[],
    changeTodoStatus: (id: string) => void,
    deleteTodo: (id: string) => void,
    openTodo: (id: string) => void,
    clearOpenedTodoId?: () => void
  };
  Todo: { todo?: ITodo };
};

export type MainScreenNavigationProps = CompositeScreenProps<MainScreenProps, NativeStackScreenProps<RootStackParamList, 'Main'>>
