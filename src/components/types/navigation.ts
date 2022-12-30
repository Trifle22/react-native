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
