import { useState } from 'react';

const Comp1 = () => {
	const [count, setCount] = useState(0);
	return (
		<>
			<h1>{count}</h1>
			<button onClick={() => setCount(0)}>Reset</button>
			<button onClick={() => setCount((prevCount) => prevCount - 1)}>
				Decrement
			</button>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
				Increment
			</button>
		</>
	);
};

export default Comp1;
