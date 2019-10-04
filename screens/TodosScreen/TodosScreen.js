import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import TODOS from '../../dummy-data/dummy-todos';
import ListTodos from '../../components/TodosList/TodosList';

const TodosScreen = props => {
    return (
        <View style={styles.container}>
            <ListTodos todos={TODOS} />          
        </View>
    )
}

export default TodosScreen;