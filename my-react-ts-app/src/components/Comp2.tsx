// useEffect hook example with use of dependency array

import { useState, useEffect } from 'react';

const Comp2 = () => {
	const [randomNumber, setRandomNumber] = useState(0);
	const [effectLogs, setEffectLogs] = useState<string[]>([]);

	useEffect(() => {
		setEffectLogs((prevEffectLogs) => [
			...prevEffectLogs,
			'effect fn has been invoked',
		]);
	}, [randomNumber]);
	// remove randomNumber from dependency array and see difference

	return (
		<div>
			<h1>{randomNumber}</h1>
			<button
				onClick={() => {
					setRandomNumber(Math.random());
				}}
			>
				Generate random number!
			</button>
			<div>
				{effectLogs.map((effect, index) => (
					<div key={index}>{'🍔'.repeat(index) + effect}</div>
				))}
			</div>
		</div>
	);
};

export default Comp2;
