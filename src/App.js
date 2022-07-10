import './App.css';
import React from 'react';
import { Sidebar } from './Components/Sidebar';
import { Sections } from './Components/Sections';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<Router>
			<Sidebar/>
			<Sections/>
		</Router>
	);
}

export default App;
