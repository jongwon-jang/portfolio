import React from 'react';

import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarLink,
	SidebarMenu,
} from './SidebarElements';

const SideBar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="about" onClick={toggle}>
						About
					</SidebarLink>
					<SidebarLink to="skills" onClick={toggle}>
						Skills
					</SidebarLink>
					<SidebarLink to="projects" onClick={toggle}>
						Projects
					</SidebarLink>
					<SidebarLink to="experience" onClick={toggle}>
						Experience
					</SidebarLink>
					<SidebarLink to="resume" onClick={toggle}>
						Resume
					</SidebarLink>
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default SideBar;
