import styled from 'styled-components';

export const HomePageWrapper = styled.div`
	height: auto;
	width: 100%;
	background: rgba(242, 240, 238);
	padding 4rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const TopSectionWrapper = styled.div`
	box-shadow: 0 25px 50px -12px rgb(0 0 0 / 25%);
	padding: 2rem;
	border-radius: 0.5rem;
	background-color: #ffffff;
	width: 90%;
`;

export const TopSectionHeaderWrapper = styled.div`
	margin-bottom: 2.5rem;
`;

export const TopSectionHeaderLogoWrapper = styled.div`
	height: 70px;
	width: 70px;
`;

export const TopSectionHeaderNavbarWrapper = styled.div``;

export const TopSectionBodyWrapper = styled.div``;

export const AboutSectionWrapper = styled.div``;
export const IntroductionWrapper = styled.div``;
export const ImageWrapper = styled.div``;

export const SocialMediaWrapper = styled.div`
	left: 0;
	bottom: 0;
	-webkit-box-align: center;
	margin: 0px;
	list-style: none;

	& .social-media-subwrapper {
		padding: 12px;
	}

	&::after {
		content: '';
		display: block;
		width: 1px;
		height: 90px;
		margin: 0px auto;
		background-color: blue;
	}
`;

export const EmailWrapper = styled.div`
	right: 0;
	bottom: 0;

	& .email--css {
		margin: 16px auto;
		padding: 12px;

		letter-spacing: 0.1em;
		-webkit-writing-mode: vertical-rl;
		writing-mode: vertical-rl;
	}

	& .email-subwrapper::after {
		content: '';
		display: block;
		width: 1px;
		height: 90px;
		margin: 0px auto;
		background-color: blue;
	}
`;

export const FooterSectionWrapper = styled.div`
	width: 90%;
	padding: 2rem;
	margin-top: 2.5rem;
`;
