import React from 'react';
import Video from '../../videos/video.mp4';
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
} from './HeroElements';

const HeroSection = () => {
	return (
		<HeroContainer id="home">
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type="video/mp4" />
			</HeroBg>
			<HeroContent>
				<HeroH1>Hello! My name is Jongwon Jang</HeroH1>
				<HeroP>
					I am a recent graduate with good knowledge of front-end techniques. I
					love spending time creating web apps and fixing small details to give
					clients a better experience. Also a great team player!
				</HeroP>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
