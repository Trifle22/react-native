import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});

interface ButtonProps {
  changeStatus: () => void;
}

const CompletedButton = ({changeStatus}: ButtonProps) => {
  return (
    <Icon.Button backgroundColor="#3b5998" name="check" onPress={changeStatus}>
      <Text style={styles.text}>
        Выполнено
      </Text>
    </Icon.Button>
  );
};


const UnCompletedButton = ({changeStatus}: ButtonProps) => {
  return (
    <Icon.Button backgroundColor="#990000" name="exclamation" onPress={changeStatus}>
      <Text style={styles.text}>
        Не выполнено
      </Text>
    </Icon.Button>
  );
};


interface Props {
  isCompleted: boolean;
  changeTodoStatus: (id: string) => void;
  id: string;
}

export const ChangeStatusButton = ({ isCompleted, changeTodoStatus, id }: Props) => {
  let content;

  const changeStatus = () => {
    changeTodoStatus(id);
  };

  if (isCompleted) {
    content = <CompletedButton changeStatus={changeStatus} />;
  } else {
    content = <UnCompletedButton changeStatus={changeStatus} />;
  }

  return (
    <View>
      {content}
    </View>
  );
};

