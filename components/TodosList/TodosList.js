import React, { useState } from 'react';
import {View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
import ResolvedTodosScreen from '../../screens/ResolvedTodosScreen/ResolvedTodosScreen';

const ListTodos = props => {
    const [todos, setTodos] = useState([...props.todos]);
    
    const deleteTodo = (id) => {
        let todosWithoutDeleted = todos.filter((item) =>{
            return item.id != id;
        });
        setTodos(todosWithoutDeleted);
    }

    const resolvedTodosScreen = (id) =>{
        
        let todosWithoutDeleted = todos.filter((item) =>{
            return item.id != id;
        });
        setTodos(todosWithoutDeleted);
        alert('The todo was resolved succesfully');
    }

    const renderItem = ({item}) => {
        return (
            <View style={styles.todo}>
                <View style={styles.todoText}>
                    <Text>{item.text}</Text>
                </View>
                <View style={styles.todoIcon}>
                    <TouchableOpacity onPress={resolvedTodosScreen.bind(this, item.id)}>
                        <Ionicons name="md-checkmark" color="green" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={deleteTodo.bind(this, item.id)}>
                        <Ionicons name="md-close" color="red" size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    
    return (
        <View>
            <FlatList data={todos} 
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.container} />
        </View>
    );
}

export default ListTodos;