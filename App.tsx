import React, { useCallback, useMemo, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ITodo } from './src/components/types/todo';
import { TodoScreen } from './src/components/screens/TodoScreen';
import { MainScreen } from './src/components/screens/MainScreen';

export default function App() {

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

  const clearOpenedTodoId = () => {
    setOpenedTodoId('');
  };

  const content = useMemo(() => {
    if (openedTodoId) {return <TodoScreen todo={todos.find((todo) => todo.id === openedTodoId)} goToMainScreen={clearOpenedTodoId}/>;}

    return <MainScreen addTodo={addTodo} todos={todos} changeTodoStatus={changeTodoStatus} deleteTodo={deleteTodo} openTodo={setOpenedTodoId} />;
  }, [changeTodoStatus, deleteTodo, openedTodoId, todos]);

  return (
    <View style={styles.container}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
