import React from 'react';
import { BsPauseFill } from 'react-icons/bs';

const PauseTimer = ({ setIsCounting }) => {
	return (
		<div onClick={() => setIsCounting(false)}>
			<BsPauseFill
				size={55}
				className='text-gray-900 hover:text-red-700 transition-colors ease-in-out duration-300'
			/>
		</div>
	);
};

export default PauseTimer;
