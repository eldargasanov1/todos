import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { BsXCircleFill } from 'react-icons/bs';

const CheckTimer = ({ handleCompleteButton, isCompleted }) => {
	return (
		<div onClick={() => handleCompleteButton()}>
			{!isCompleted ? (
				<BsCheckCircleFill
					size={40}
					className='text-gray-900 hover:text-green-700 transition-colors ease-in-out duration-300'
				/>
			) : (
				<BsXCircleFill
					size={40}
					className='text-gray-900 hover:text-red-700 transition-colors ease-in-out duration-300'
				/>
			)}
		</div>
	);
};

export default CheckTimer;
