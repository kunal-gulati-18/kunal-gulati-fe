import React from 'react';
import Text from '../../../common/Text';
import {
	AboutSectionWrapper,
	ImageWrapper,
	IntroductionWrapper,
} from '../wrappers';
import avatar from '../../../assets/kunal_img.JPG'

const AboutSection = () => {
	return (
		<AboutSectionWrapper className="d-flex col-gap-8">
			<IntroductionWrapper className='d-flex flex-column row-gap-16'>
				<div className='d-flex'>
					<Text>Hi, my name is</Text>
				</div>
				<div className='d-flex flex-column row-gap-8'>
					<div>
						<Text>Kunal Gulati</Text>
					</div>
					<div>{"<>"}I design and code beautifully simple things{"</>"}</div>
				</div>
				<div className='d-flex'>
					<Text>
						I am a Frontend engineer with more than three years of experience.
						recognized as a practical and effective developer, experienced in
						leading cross-functional teams in a time-pressured setting.
						Currently, I’m focused on building accessible, AI powered product at
						<span>Level AI.</span>
					</Text>
				</div>
			</IntroductionWrapper>
			<ImageWrapper>
            <img className='border-radius-8 w-100' src={avatar}/>
            </ImageWrapper>
		</AboutSectionWrapper>
	);
};

export default AboutSection;
