/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
interface Props {
  addTodo: (title: string) => void;
}

export const AddTodoForm = ({ addTodo }: Props) => {

  const [title, setTitle] = useState<string>('');

  const onPress = () => {
    if (title.trim().length) {
      addTodo(title);
      setTitle('');
    } else {
      Alert.alert('Название дела не должно быть пустым');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <Icon.Button
        name="plus"
        onPress={onPress}
        style={styles.button}
        backgroundColor="#3949ab"
        iconStyle={{marginRight: 0}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#3949ab',
    padding: 10,
    minWidth: '80%',
  },
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
