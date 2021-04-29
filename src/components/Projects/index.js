import React, { useState } from 'react';
import data from './data';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import {
	ProjectContainer,
	ProjectH2,
	ProjectSection,
	ProjectArticle,
	ProjectHeader,
	ProjectTitle,
	ShowButton,
} from './ProjectsElements';

const Projects = () => {
	const [projects, setProjects] = useState(data);
	const [showInfo, setShowInfo] = useState(false);
	return (
		<>
			<ProjectH2>Projects</ProjectH2>
			<ProjectContainer>
				<ProjectSection>
					{projects.map(project => {
						return (
							<ProjectArticle key={project.id}>
								<ProjectHeader>
									<ProjectTitle>{project.title}</ProjectTitle>
									<ShowButton onClick={() => setShowInfo(!showInfo)}>
										{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
									</ShowButton>
								</ProjectHeader>
								{showInfo && project.info}
							</ProjectArticle>
						);
					})}
				</ProjectSection>
			</ProjectContainer>
		</>
	);
};

export default Projects;
