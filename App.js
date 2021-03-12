import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, TextInput, FlatList } from 'react-native';
import realm, { addTodo, clearAll, getAllTodos, deleteTodo, searchTodo } from './realm';
import { renderTodos } from './ui';

const App = () => {
	const [todos, setTodos] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		fetchTodos();
	}, []);

	const fetchTodos = () => {
		const todo = getAllTodos();
		setTodos(todo);
	}

	return (
		<>
			<View style={{}}>
				<Text
					style={{ textAlign: 'center' }}
				>Todo List</Text>
				<TextInput
					style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginHorizontal: 10 }}
					onChangeText={text => {
						setSearch(text);
						const t = searchTodo(text);
						setTodos(t);
					}}
				/>

				<TouchableOpacity onPress={() => {
					addTodo({ todo: search })
				}}><Text>Add</Text></TouchableOpacity>

				<TouchableOpacity onPress={() => {
					clearAll();
				}}><Text>Delete</Text></TouchableOpacity>

				<View
					style={{
					}}
				>

					<FlatList
					data={todos}
					renderItem={renderTodos}
					keyExtractor={(item,index)=>index.toString()}
					/>

				</View>
			</View>
		</>
	)
}

export default App;