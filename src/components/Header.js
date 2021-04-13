import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => {
	return (
		<div>
			<Container className="mt-5 text-center">
				<h1 className="mb-2">Hello! My name is Jongwon Jang</h1>
				<h2>Web Developer who creates interactive experience</h2>
			</Container>
			<Container className="mt-5 w-50">
				<p>
					I am a recent graduate with good knowledge of front-end techniques. I
					love spending time creating web apps and fixing small details to give
					clients a better experience. Also a great team player!
				</p>
			</Container>
		</div>
	);
};

export default Header;
