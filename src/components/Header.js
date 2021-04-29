import React from 'react';
// import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Test = styled.div`
	background-color: orange;
	color: red;
`;

const Header = () => {
	return (
		<>
			{/* <Container id="home">
				<h1 className="mb-2">Hello! My name is Jongwon Jang</h1>
				<h2>Web Developer who creates interactive experience</h2>
			</Container>
			<Container>
				<p>
					I am a recent graduate with good knowledge of front-end techniques. I
					love spending time creating web apps and fixing small details to give
					clients a better experience. Also a great team player!
				</p>
			</Container> */}
			<Test>Hello there</Test>
		</>
	);
};

export default Header;
