import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Comp1 from './components/comp1';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		{/* <App /> */}
		<Comp1 />
	</React.StrictMode>
);
