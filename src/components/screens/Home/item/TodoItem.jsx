import React from 'react';
import Check from './Buttons/Check';
import cn from 'classnames';
import X from './Buttons/X';
import Start from './Buttons/Start';
import Stop from './Buttons/Stop';

const TodoItem = ({
	todo,
	handleComplete,
	removeTodo,
	currentToDoId,
	setCurrentToDoId,
	setIsTimerActive,
}) => {
	const isActive = todo.id === currentToDoId;

	return (
		<button
			className={cn(
				'flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full box-border transition-all ease-in-out delay-400',
				{
					'border-2 rounded-2xl border-orange-500': isActive,
				}
			)}
		>
			<div
				className='flex items-center'
				onClick={() => handleComplete(todo.id)}
			>
				<Check isCompleted={todo.completed} />
				<span
					className={cn('inline-block flex-auto pr-4 text-left', {
						'line-through': todo.completed,
					})}
				>
					{todo.title}
				</span>
			</div>
			<div className='flex items-center gap-2'>
				{isActive ? (
					<Stop
						setCurrentToDoId={setCurrentToDoId}
						setIsTimerActive={setIsTimerActive}
					/>
				) : (
					<Start
						isCompleted={todo.isCompleted}
						handleComplete={handleComplete}
						setCurrentToDoId={setCurrentToDoId}
						id={todo.id}
						setIsTimerActive={setIsTimerActive}
					/>
				)}
				<X removeTodo={removeTodo} id={todo.id} />
			</div>
		</button>
	);
};

export default TodoItem;
