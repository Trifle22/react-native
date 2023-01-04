import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useTodosContext } from '../../hooks/useTodosContext';
import { MainScreen } from '../../screens/MainScreen';
import { TodoScreen } from '../../screens/TodoScreen';


export const AppStack = () => {

  const Stack = createNativeStackNavigator();

  const {
    todos,
    addTodo,
    deleteTodo,
    changeTodoStatus,
  } = useTodosContext();


  return (
    <Stack.Navigator initialRouteName="Main" screenOptions={ {headerShown: false}}>
      <Stack.Screen name="Main">
        {() => <MainScreen addTodo={addTodo} todos={todos} changeTodoStatus={changeTodoStatus} deleteTodo={deleteTodo} />}
      </Stack.Screen>
      <Stack.Screen name="Todo" component={TodoScreen} />
    </Stack.Navigator>
  );
};
