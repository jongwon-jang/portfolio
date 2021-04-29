import styled from 'styled-components';

export const ProjectContainer = styled.div`
	width: 100%;
	height: 93vh;
	/* margin: 5rem auto; */
	background: #fff;
	border-radius: 0.25rem;
	padding: 2.5rem 2rem;
	display: grid;
	gap: 1rem 2rem;
`;

export const ProjectH2 = styled.div`
	/* line-height: 1.2; */
	font-weight: 700;
	font-size: 2rem;
	/* border: 2px solid black; */
	text-align: center;
`;

export const ProjectSection = styled.section`
	width: 90vw;
	margin: 0 auto;
	/* border: 2px solid black; */
`;

export const ProjectArticle = styled.article`
	border: 2px solid black;
	margin-bottom: 10px;
`;

export const ProjectHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ProjectTitle = styled.h4`
	text-transform: none;
	line-height: 1.5;
`;

export const ShowButton = styled.button`
	background: transparent;
	border-color: transparent;
	width: 2rem;
	height: 2rem;
	background: grey;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	color: red;
	cursor: pointer;
	margin-left: 1rem;
	align-self: center;
	min-width: 2rem;
`;
