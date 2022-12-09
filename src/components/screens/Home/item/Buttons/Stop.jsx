import React from 'react';
import { BsStopFill } from 'react-icons/bs';

const Stop = ({ setCurrentToDoId, setIsTimerActive }) => {
	const handleClick = () => {
		setCurrentToDoId('');
		setIsTimerActive(false);
	};

	return (
		<div onClick={handleClick}>
			<BsStopFill
				size={24}
				className='text-gray-900 hover:text-red-700 transition-colors ease-in-out duration-300'
			/>
		</div>
	);
};

export default Stop;
