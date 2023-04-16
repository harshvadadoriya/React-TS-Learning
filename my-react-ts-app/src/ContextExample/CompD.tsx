// For multiple props it is not better option because code grows horizontally, instead use useContext()

import { FirstName, LastName } from './CompA';
const CompD = () => {
	return (
		<>
			<FirstName.Consumer>
				{(fname) => {
					return (
						<LastName.Consumer>
							{(lname) => {
								return (
									<h1>
										My name is {fname} {lname}
									</h1>
								);
							}}
						</LastName.Consumer>
					);
				}}
			</FirstName.Consumer>
		</>
	);
};
export default CompD;
