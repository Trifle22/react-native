import React from 'react';
import { TodoScreen  } from './src/components/screens/TodoScreen';
import { MainScreen } from './src/components/screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/components/types/navigation';
import { useTodosContext } from './src/components/hooks/useTodosContext';

export default function App() {

  const {
    addTodo,
    todos,
    changeTodoStatus,
    deleteTodo,
    setOpenedTodoId,
    openedTodoId,
  } = useTodosContext();

  const RootStack = createNativeStackNavigator<RootStackParamList>();

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
