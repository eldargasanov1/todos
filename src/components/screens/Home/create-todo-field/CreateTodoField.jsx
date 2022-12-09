import axios from 'axios';
import React, { useState } from 'react';

const CreateTodoField = ({ setTodos, userId }) => {
	const [title, setTitle] = useState('');

	const addTodo = title => {
		if (!title) return;
		const newTodo = {
			userId: userId,
			title: title,
			completed: false,
		};
		axios
			.post(
				`https://63937ca6ab513e12c50feb63.mockapi.io/users/${userId}/todos`,
				newTodo
			)
			.then(res => setTodos(prev => [...prev, res.data]));
		setTitle('');
	};

	return (
		<div className='flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full relative'>
			<input
				type='text'
				value={title}
				onChange={e => setTitle(e.target.value)}
				onKeyPress={e => e.key === 'Enter' && addTodo(title)}
				className='bg-transparent outline-none border-none w-full'
				placeholder='Enter todo'
			/>
		</div>
	);
};

export default CreateTodoField;
