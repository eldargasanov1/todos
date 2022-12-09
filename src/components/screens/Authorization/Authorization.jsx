import React, { useState } from 'react';

const Authorization = ({ setUsername }) => {
	const [login, setLogin] = useState('');

	return (
		<div className='text-white max-w-max mx-auto'>
			<h1 className='text-2xl font-bold text-center mb-8'>Authorization</h1>
			<div className='flex flex-col items-center justify-between gap-4 rounded-2xl bg-zinc-800 p-5'>
				<input
					type='text'
					value={login}
					className='bg-transparent outline-none rounded-2xl border-zinc-600 border-2 w-full p-5
					text-2xl text-center'
					onChange={e => setLogin(e.target.value)}
					onKeyPress={e => e.key === 'Enter' && setUsername(login)}
				/>
				<button
					className='rounded-2xl bg-zinc-600 px-5 py-2
					text-2xl text-center font-bold'
					onClick={() => setUsername(login)}
				>
					Log in
				</button>
			</div>
		</div>
	);
};

export default Authorization;
