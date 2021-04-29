import React from 'react';
// import Navigation from './Navigation';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import Header from './Header';
// import Projects from './Projects';
// import SideBar from './Sidebar';

// import Experience from './Experience';
// import Skills from './Skills';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Home from '../pages';

const App = () => {
	return (
		<Router>
			<Home />
			{/* <Navigation />
			<Header />
			<Skills />
			<Projects />
			<Experience />
			<Footer /> */}
		</Router>
	);
};

export default App;
