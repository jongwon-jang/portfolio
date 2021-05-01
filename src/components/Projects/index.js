import React from 'react';
import data from './data';

import {
	ProjectContainer,
	ProjectH2,
	ProjectSection,
} from './ProjectsElements';

import SingleProject from './SingleProject';

const Projects = () => {
	const projects = data;

	return (
		<>
			<ProjectH2>Projects</ProjectH2>
			<ProjectContainer>
				<ProjectSection>
					{projects.map(project => {
						return <SingleProject key={project.id} {...project} />;
					})}
				</ProjectSection>
			</ProjectContainer>
		</>
	);
};

export default Projects;
