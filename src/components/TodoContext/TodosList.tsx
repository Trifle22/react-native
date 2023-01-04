/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState, useMemo } from 'react';
import { View, VirtualizedList, StyleSheet, Text, StatusBar, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Todo } from './Todo';
import { ITodo } from '../types/todo';

interface Props {
  data: ITodo[];
  changeTodoStatus: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export const TodosList = ({data, changeTodoStatus, deleteTodo}: Props) => {

  const [showCompletedTodos, setShowAllTodos] = useState<boolean>(false);

  const toggleSwitch = () => {
    setShowAllTodos(!showCompletedTodos);
  };

  const filteredTodos = useMemo(() => {
    if (showCompletedTodos) {
      return data.filter((todo) => todo.completed);
    }
    return data;
  }, [data, showCompletedTodos]);

  const getItemCount = (data: ITodo[]) => data.length;

  const getItem = (data: ITodo[], index: number) => ({
    key: index,
    title: data[index].title,
    completed: data[index].completed,
    id: data[index].id,
  });

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>
          Список задач
        </Text>
        <Icon name="tasks"  size={20} color="#3949ab"/>
      </View>
      <View style={styles.spaceBetweenRow}>
        <Text>
          Показать все
        </Text>
        <Switch
          value={showCompletedTodos}
          onValueChange={toggleSwitch}
          disabled={!data.length}
        />
        <Text>
          Показать только выполненные
        </Text>
      </View>
      <VirtualizedList
        data={filteredTodos}
        initialNumToRender={4}
        renderItem={({ item }) => <Todo todo={item} changeTodoStatus={changeTodoStatus} deleteTodo={deleteTodo} />}
        getItemCount={getItemCount}
        keyExtractor={item => item.id}
        getItem={getItem}
      />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  spaceBetweenRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginBottom: 10,
  },
});
