import React, { useState } from 'react';
import CreateTodoField from './create-todo-field/CreateTodoField';
import TodoItem from './item/TodoItem';
import Timer from './timer/Timer';
import cn from 'classnames';
import axios from 'axios';

const Home = ({ todos, userId, setTodos }) => {
	const [currentToDoId, setCurrentToDoId] = useState('');
	const [isTimerActive, setIsTimerActive] = useState(false);
	const currentToDo = todos.find(todo => todo.id === currentToDoId);

	const changeTodo = id => {
		const todo = todos.find(todo => todo.id === id);
		todo.completed = !todo.completed;
		axios.put(
			`https://63937ca6ab513e12c50feb63.mockapi.io/users/${userId}/todos/${id}`,
			todo
		);
		setTodos(prev =>
			prev.map(item => {
				if (item === todo) {
					return todo;
				} else return item;
			})
		);
	};

	const removeTodo = id => {
		if (id === currentToDoId) {
			setCurrentToDoId('');
			setIsTimerActive(false);
		}
		axios.delete(
			`https://63937ca6ab513e12c50feb63.mockapi.io/users/${userId}/todos/${id}`
		);
		setTodos(prev => prev.filter(item => item.id !== id));
	};

	const handleComplete = id => {
		changeTodo(id);
		if (id === currentToDoId) {
			setCurrentToDoId('');
			setIsTimerActive(false);
		}
	};

	return (
		<div className='text-white w-4/5 mx-auto'>
			<h1 className='text-2xl font-bold text-center mb-8'>Todos</h1>
			<div
				className={cn(
					'mb-8 max-h-[45rem] overflow-auto screenMedia:max-h-[35rem] smallScreenMedia:max-h-[25rem]',
					{
						'max-h-96 overflow-auto screenMedia:mb-2 screenMedia:max-h-80 smallScreenMedia:max-h-[12rem]':
							isTimerActive,
					}
				)}
			>
				{todos
					.sort((firstTodo, secondTodo) => secondTodo.id - firstTodo.id)
					.map(todo => (
						<TodoItem
							key={todo.id}
							todo={todo}
							handleComplete={handleComplete}
							removeTodo={removeTodo}
							currentToDoId={currentToDoId}
							setCurrentToDoId={setCurrentToDoId}
							setIsTimerActive={setIsTimerActive}
						/>
					))}
			</div>
			<CreateTodoField
				userId={userId}
				setCurrentToDoId={setCurrentToDoId}
				setIsTimerActive={setIsTimerActive}
				setTodos={setTodos}
			/>
			{isTimerActive ? (
				<Timer
					changeTodo={changeTodo}
					currentToDoId={currentToDoId}
					setCurrentToDoId={setCurrentToDoId}
					setIsTimerActive={setIsTimerActive}
					isCompleted={currentToDo.completed}
				/>
			) : null}
		</div>
	);
};

export default Home;
