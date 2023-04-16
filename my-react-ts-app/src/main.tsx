import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Comp1 from './components/comp1';
import Comp2 from './components/Comp2';
import Comp3 from './components/Comp3';
import CompA from './ContextExample/CompA';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		{/* <App /> */}
		{/* <Comp1 /> */}
		{/* <Comp2 /> */}
		{/* <Comp3 /> */}
		<CompA />
	</React.StrictMode>
);
