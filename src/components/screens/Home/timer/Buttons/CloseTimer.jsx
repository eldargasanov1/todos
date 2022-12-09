import React from 'react';
import { BsX } from 'react-icons/bs';

const CloseTimer = ({ setCurrentToDoId, setIsTimerActive }) => {
	const handleClick = () => {
		setCurrentToDoId('');
		setIsTimerActive(false);
	};

	return (
		<div onClick={handleClick}>
			<BsX
				size={40}
				className='absolute top-2 right-2 text-gray-900 hover:text-red-700 transition-colors ease-in-out duration-300'
			/>
		</div>
	);
};

export default CloseTimer;
