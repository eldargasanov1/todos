import React from 'react';
import { BsPlayFill } from 'react-icons/bs';

const StartTimer = ({ setIsCounting }) => {
	return (
		<div onClick={() => setIsCounting(true)}>
			<BsPlayFill
				size={55}
				className='text-gray-900 hover:text-green-700 transition-colors ease-in-out duration-300'
			/>
		</div>
	);
};

export default StartTimer;
