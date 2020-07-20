import React, {FC} from 'react';
import {View, TextInput, Text} from 'react-native';
import AppButton from 'src/components/AppButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import useFormAdd from './useFormAdd';

type Props = {
  addTodoItem: (title: string) => void;
};

const FormAdd: FC<Props> = (props) => {
  const {isModal, sendTodo, setValue, value} = useFormAdd(props);

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="You can type here..."
          onChangeText={setValue}
          value={value}
          autoCorrect={false}
        />
        <AppButton onPress={sendTodo}>
          <Icon name="plus" size={24} color="#ffffff" />
        </AppButton>
      </View>
      {isModal && (
        <Text style={styles.warning}>Pliz add text to the input field!!!!</Text>
      )}
    </>
  );
};

export default FormAdd;
