import React from 'react';
import { BsChevronBarRight } from 'react-icons/bs';

const SkipTimer = ({ setIsWorkTime, setIsCounting }) => {
	return (
		<div
			onClick={() => {
				setIsWorkTime(prev => !prev);
				setIsCounting(false);
			}}
		>
			<BsChevronBarRight
				size={30}
				className='text-gray-900 hover:text-orange-500 transition-colors ease-in-out duration-300'
			/>
		</div>
	);
};

export default SkipTimer;
