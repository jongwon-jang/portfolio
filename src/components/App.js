import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Header from './Header';
import Projects from './Projects';

import Experience from './Experience';
import Skills from './Skills';

const App = () => {
	return (
		<div>
			<Navigation />
			<Header />
			<Skills />
			<Projects />
			<Experience />
			<Footer />
		</div>
	);
};

export default App;
