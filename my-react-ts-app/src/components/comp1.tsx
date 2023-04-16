// useState and useEffect hook example

import { useEffect, useState } from 'react';

const Comp1 = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `You clicked ${count} times`;
	}, []);
	return (
		<>
			<h1>{count}</h1>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(0)}>Reset</button>
			<button onClick={() => setCount(count - 1)}>Decrement</button>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</>
	);
};

export default Comp1;
