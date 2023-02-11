import React from 'react';
import FooterSection from './FooterSection';
import TopSection from './TopSection';
import { HomePageWrapper } from './wrappers';

const HomePage = () => {
	return (
		<HomePageWrapper>
			<TopSection />
			<FooterSection />
		</HomePageWrapper>
	);
};

export default HomePage;
