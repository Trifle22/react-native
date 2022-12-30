import { useCallback, useState } from 'react';
import { ITodo } from '../types/todo';

export const useTodosContext = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const [openedTodoId, setOpenedTodoId] = useState<string>('');

  const changeTodoStatus = useCallback((id: string) => {
    const changedTodos = [...todos].map(todo => {
      if (todo.id === id) {
        return {
          id,
          title: todo.title,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTodos(changedTodos);
  }, [todos]);

  const deleteTodo = useCallback((id: string) => {
    const changedTodos = [...todos].filter(todo => todo.id !== id);

    setTodos(changedTodos);
  }, [todos]);

  const addTodo = (title: string) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
      completed: false,
    };

    setTodos(prev => [...prev, newTodo]);
  };

  return {
    todos,
    openedTodoId,
    addTodo,
    deleteTodo,
    changeTodoStatus,
    setOpenedTodoId,
  };
};
