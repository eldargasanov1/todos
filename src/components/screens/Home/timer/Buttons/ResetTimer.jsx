import React from 'react';
import { BsArrowClockwise } from 'react-icons/bs';

const ResetTimer = ({ setTimeLeft, setIsCounting, startTime }) => {
	return (
		<div
			onClick={() => {
				setTimeLeft(startTime);
				setIsCounting(false);
			}}
		>
			<BsArrowClockwise
				size={30}
				className='text-gray-900 hover:text-orange-500 transition-colors ease-in-out duration-300'
			/>
		</div>
	);
};

export default ResetTimer;
