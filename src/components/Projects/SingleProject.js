import React, { useState, useEffect } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import {
	ProjectArticle,
	ProjectHeader,
	ProjectTitle,
	ShowButton,
	ProjectVideo,
	ProjectInfo,
	ProjectDetail,
} from './ProjectsElements';

const SingleProject = ({ id, title, info, source }) => {
	const [showInfo, setShowInfo] = useState(false);

	useEffect(() => {
		if (id === 1) {
			setShowInfo(true);
		}
	}, [id]);
	return (
		<>
			<ProjectArticle>
				<ProjectHeader>
					<ProjectTitle>{title}</ProjectTitle>
					<ShowButton onClick={() => setShowInfo(!showInfo)}>
						{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
					</ShowButton>
				</ProjectHeader>
				{showInfo && (
					<ProjectInfo>
						<ProjectVideo src={source} frameBorder="0" />
						<ProjectDetail>{info}</ProjectDetail>
					</ProjectInfo>
				)}
			</ProjectArticle>
		</>
	);
};

export default SingleProject;
