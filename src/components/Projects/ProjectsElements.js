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
	border: 2px solid black;
	margin: 2rem;
	text-align: center;
`;

export const ProjectSection = styled.section`
	width: 90vw;
	margin: 0 auto;
	/* border: 2px solid black; */
`;

export const ProjectArticle = styled.article`
	border: 2px solid black;
	margin-bottom: 1.5rem;
	border-radius: 10px;
	padding: 0.5rem;
`;

export const ProjectHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ProjectTitle = styled.h4`
	text-transform: uppercase;
	font-weight: 600;
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
	color: white;
	cursor: pointer;
	margin-left: 1rem;
	align-self: center;
	min-width: 2rem;
	background-color: black;
`;

export const ProjectInfo = styled.div`
	display: flex;

	@media screen and (max-width: 800px) {
		flex-direction: column;
	}
	margin: 2rem;
`;

export const ProjectVideo = styled.iframe`
	margin-right: 1rem;
	display: flex;
	width: 50%;
	height: 30rem;

	@media screen and (max-width: 800px) {
		width: 100%;
		height: 100%;
	}
`;

export const ProjectDetail = styled.div`
	border: 1px solid black;
	width: 50%;
	font-size: 1.3rem;

	@media screen and (max-width: 800px) {
		width: 100%;
		height: 100%;
		font-size: 1rem;
	}
`;
