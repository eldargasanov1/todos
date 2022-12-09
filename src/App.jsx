import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Authorization from './components/screens/Authorization/Authorization';
import Home from './components/screens/Home/Home';

const App = () => {
	const [todos, setTodos] = useState([]);
	const isAuthorized = !!todos.length;
	const [username, setUsername] = useState('');
	const [user, setUser] = useState({});

	useEffect(() => {
		if (!username) return;
		axios
			.get(
				`https://63937ca6ab513e12c50feb63.mockapi.io/users?username=${username}`
			)
			.then(res => setUser(res.data[0]));
	}, [username]);

	useEffect(() => {
		if (!Object.keys(user).length) return;
		axios
			.get(`https://63937ca6ab513e12c50feb63.mockapi.io/users/${user.id}/todos`)
			.then(res => setTodos(res.data));
	}, [user]);

	return (
		<div>
			{isAuthorized ? (
				<Home todos={todos} userId={user && user.id} setTodos={setTodos} />
			) : (
				<Authorization setUsername={setUsername} />
			)}
		</div>
	);
};

export default App;
