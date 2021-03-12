
import React from 'react';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import realm, { addTodo, clearAll, getAllTodos, deleteTodo, searchTodo } from './realm';

const renderTodos = ({item, index}) => {
    return (
        <>
            <View
                key={index}
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20
                }}
            >
                <TouchableOpacity onPress={() => {
                    alert()
                }}><Text>{item.todo}</Text></TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        deleteTodo(item._id);
                        fetchTodos();
                    }}
                ><Text>Sil</Text></TouchableOpacity>
            </View>
        </>
    )
}

export {
    renderTodos
}