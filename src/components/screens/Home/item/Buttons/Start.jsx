import React from 'react';
import { BsPlayFill } from 'react-icons/bs';

const Start = ({
	setCurrentToDoId,
	id,
	setIsTimerActive,
	isCompleted,
	handleComplete,
}) => {
	const handleClick = () => {
		if (isCompleted) {
			handleComplete(id);
		}
		setCurrentToDoId(id);
		setIsTimerActive(true);
	};

	return (
		<div onClick={handleClick}>
			<BsPlayFill
				size={24}
				className='text-gray-900 hover:text-green-700 transition-colors ease-in-out duration-300'
			/>
		</div>
	);
};

export default Start;
