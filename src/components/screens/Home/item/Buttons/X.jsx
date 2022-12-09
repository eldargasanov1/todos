import React from 'react';
import { BsX } from 'react-icons/bs';

const X = ({ removeTodo, id }) => {
	return (
		<div onClick={() => removeTodo(id)}>
			<BsX
				size={24}
				className='text-gray-900 hover:text-red-700 transition-colors ease-in-out duration-300'
			/>
		</div>
	);
};

export default X;
