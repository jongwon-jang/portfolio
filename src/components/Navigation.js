import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
	return (
		<Navbar bg="light" expand="lg" className="sticky-top">
			<Navbar.Brand href="#home">Jongwon</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#home">Skills</Nav.Link>
					<Nav.Link href="#link">Projects</Nav.Link>
					<Nav.Link href="#link">Experience</Nav.Link>
					<Nav.Link href="#link">Projects</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
