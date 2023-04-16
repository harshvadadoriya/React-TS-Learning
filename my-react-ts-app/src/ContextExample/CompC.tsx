// using useContext()
import { useContext } from 'react';
import { FirstName, LastName } from './CompA';

// import CompD from './CompD';
const CompC = () => {
	const fname = useContext(FirstName);
	const lname = useContext(LastName);
	return (
		<>
			<h1>
				My name is {fname} {lname}
			</h1>
			{/* <CompD /> */}
		</>
	);
};
export default CompC;
