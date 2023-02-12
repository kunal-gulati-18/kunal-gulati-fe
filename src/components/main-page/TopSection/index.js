import React from 'react';
import {
	EmailWrapper,
	SocialMediaWrapper,
	TopSectionBodyWrapper,
	TopSectionHeaderLogoWrapper,
	TopSectionHeaderNavbarWrapper,
	TopSectionHeaderWrapper,
	TopSectionWrapper,
} from '../wrappers';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Email from './Email';
import ExperienceSection from './ExperienceSection';
import Navbar from './Navbar';
import SocialMedia from './SocialMedia';
import WorkSection from './WorkSection';

const TopSection = () => {
	return (
		<TopSectionWrapper>
			<header>
				<TopSectionHeaderWrapper className="d-flex align-items-end justify-content-between d-flex">
					<TopSectionHeaderLogoWrapper>
						<img className="height-100" src="kG.png" />
					</TopSectionHeaderLogoWrapper>
					<Navbar />
				</TopSectionHeaderWrapper>
			</header>

			<SocialMediaWrapper className="pos-fixed">
				<div className="d-flex flex-column row-gap-16 social-media-subwrapper m-b-16 pd-r-12 pd-l-12">
					<SocialMedia />
				</div>
			</SocialMediaWrapper>
			<EmailWrapper className="pos-fixed">
				<div className="email-subwrapper d-flex flex-column align-items-center pos-relative">
					<Email />
				</div>
			</EmailWrapper>

			<TopSectionBodyWrapper className="d-flex flex-column row-gap-32">
				<AboutSection />
				<ExperienceSection />
				<WorkSection />
				<ContactSection />
			</TopSectionBodyWrapper>
		</TopSectionWrapper>
	);
};

export default TopSection;
