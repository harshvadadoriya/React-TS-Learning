// useEffect hook example with dependency array

import { useState, useEffect } from 'react';

const Comp3 = () => {
	const [count, setCount] = useState(0);

	// No Dependency array
	useEffect(() => {
		console.log(`Component re-rendered! Count is ${count}`);
	});

	// Empty Dependency array
	useEffect(() => {
		console.log(`Component mounted!`);
	}, []);

	// with Dependency array value i.e. state
	useEffect(() => {
		console.log(`Count changed! New count is ${count}`);
	}, [count]);

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
};

export default Comp3;
