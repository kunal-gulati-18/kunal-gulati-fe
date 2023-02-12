import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const socialMediaList = [
	{
		id: 1,
		link: '',
		icon: <LinkedInIcon />,
		title: 'LinkedIn',
	},
	{
		id: 2,
		link: '',
		icon: <GitHubIcon />,
		title: 'Github',
	},
	{
		id: 3,
		link: '',
		icon: <InstagramIcon />,
		title: 'Instagram',
	},
];
const SocialMedia = () => {
	return socialMediaList?.map((item) => (
		<a key={item.id} href={item.li} title={item.title} className="d-flex social-media-icon">
			{item.icon}
		</a>
	));
};

export default SocialMedia;
