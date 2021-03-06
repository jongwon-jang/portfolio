import React, { useState } from 'react';

import SideBar from '../components/Sidebar';
import NavBar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Projects from '../components/Projects';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<SideBar isOpen={isOpen} toggle={toggle} />
			<NavBar toggle={toggle} />
			<HeroSection />
			<Projects />
		</>
	);
};

export default Home;
