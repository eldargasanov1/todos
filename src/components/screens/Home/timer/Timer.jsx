import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import PauseTimer from './Buttons/PauseTimer';
import StartTimer from './Buttons/StartTimer';
import CheckTimer from './Buttons/CheckTimer';
import ResetTimer from './Buttons/ResetTimer';
import SkipTimer from './Buttons/SkipTimer';
import CloseTimer from './Buttons/CloseTimer';
import useSound from 'use-sound';
import alarm from '../../../../sounds/alarm.mp3';

const Timer = ({
	changeTodo,
	currentToDoId,
	setCurrentToDoId,
	setIsTimerActive,
	isCompleted,
}) => {
	const [isWorkTime, setIsWorkTime] = useState(true);
	const [isCounting, setIsCounting] = useState(false);
	const [timeLeft, setTimeLeft] = useState(1500);
	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft - minutes * 60;
	const startTime = isWorkTime ? 25 * 60 : 5 * 60;
	const [playAlarm] = useSound(alarm, { volume: 0.25 });

	useEffect(() => {
		setIsCounting(false);
		setTimeLeft(startTime);
	}, [startTime, currentToDoId]);

	useEffect(() => {
		let timerID;
		if (isCounting) {
			timerID = setInterval(() => {
				setTimeLeft(prev => (prev -= 1));
			}, 1000);
		}

		return () => {
			clearInterval(timerID);
		};
	}, [isCounting, isWorkTime]);

	useEffect(() => {
		if (timeLeft === 0) {
			playAlarm();
			setIsWorkTime(prev => !prev);
			setIsCounting(false);
		}
	}, [timeLeft, playAlarm]);

	const getPadTime = time => time.toString().padStart(2, '0');
	const handleCompleteButton = () => {
		changeTodo(currentToDoId);
		setCurrentToDoId('');
		setIsTimerActive(false);
	};

	return (
		<div className='absolute bottom-0 left-0 rounded-2xl bg-zinc-800 p-5 w-full flex flex-col items-center justify-center gap-8 border-2 rounded-2xl border-zinc-600 screenMedia:gap-2'>
			<CloseTimer
				setCurrentToDoId={setCurrentToDoId}
				setIsTimerActive={setIsTimerActive}
			/>
			<div className='flex flex-col items-center justify-center gap-6'>
				<div className='flex flex-col items-center justify-center gap-2'>
					<div className='flex items-center justify-center gap-4 text-base'>
						<button
							className={cn(
								'rounded-2xl p-2 transition ease-in-out delay-400',
								{
									'bg-zinc-700': isWorkTime,
								}
							)}
							onClick={() => {
								setIsWorkTime(true);
								if (!isWorkTime) {
									setIsCounting(false);
								}
							}}
						>
							Work
						</button>
						<button
							className={cn(
								'rounded-2xl p-2 transition-all ease-in-out delay-400',
								{
									'bg-gray-700': !isWorkTime,
								}
							)}
							onClick={() => {
								setIsWorkTime(false);
								if (isWorkTime) {
									setIsCounting(false);
								}
							}}
						>
							Break
						</button>
					</div>
					<div className='text-8xl screenMedia:text-6xl'>{`${getPadTime(
						minutes
					)}:${getPadTime(seconds)}`}</div>
				</div>
				<div className='flex items-center justify-center gap-4'>
					<ResetTimer
						setTimeLeft={setTimeLeft}
						setIsCounting={setIsCounting}
						startTime={startTime}
					/>
					{isCounting ? (
						<PauseTimer setIsCounting={setIsCounting} />
					) : (
						<StartTimer setIsCounting={setIsCounting} />
					)}
					<SkipTimer
						setIsWorkTime={setIsWorkTime}
						setIsCounting={setIsCounting}
					/>
				</div>
			</div>
			<CheckTimer
				handleCompleteButton={handleCompleteButton}
				isCompleted={isCompleted}
			/>
		</div>
	);
};

export default Timer;
