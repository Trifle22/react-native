import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { AddTodoForm } from './src/components/AddTodoForm';
import { Navbar } from './src/components/NavBar';
import { TodosList } from './src/components/TodosList';
import { ITodo } from './src/components/types/todo';

export default function App() {

  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (title: string) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
      completed: false,
    };

    setTodos(prev => [...prev, newTodo]);
  };

  const changeTodoStatus = (id: string) => {
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
  };

  const deleteTodo = (id: string) => {
    const changedTodos = [...todos].filter(todo => todo.id !== id);

    setTodos(changedTodos);
  };
  return (
    <View style={styles.container}>
        <Navbar  title="TODO APP"/>
        <AddTodoForm addTodo={addTodo} />
        <TodosList data={todos} changeTodoStatus={changeTodoStatus} deleteTodo={deleteTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'flex-start',
},
});
