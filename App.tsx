import React, { useCallback, useState } from 'react';
import { ITodo } from './src/components/types/todo';
import { TodoScreen  } from './src/components/screens/TodoScreen';
import { MainScreen } from './src/components/screens/MainScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreenNavigationProps, RootStackParamList } from './src/components/types/navigation';

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

  const RootStack = createNativeStackNavigator<RootStackParamList>();
  const navigation = useNavigation();

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Main">
        <RootStack.Screen
          name="Main"
          children={() =>
          <MainScreen
            addTodo={addTodo}
            todos={todos}
            changeTodoStatus={changeTodoStatus}
            deleteTodo={deleteTodo}
            openTodo={setOpenedTodoId}
            navigation={navigation}
          />}
          />
        <RootStack.Screen
          name="Todo"
          children={() => <TodoScreen todo={todos.find(todo => todo.id === openedTodoId)} />}
        />
      </RootStack.Navigator>
    </NavigationContainer>

  );

  }
