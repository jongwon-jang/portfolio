import React from 'react';
// import Navigation from './Navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';
import Projects from './Projects';

import Experience from './Experience';
import Skills from './Skills';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import SideBar from './Sidebar';
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
