import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg';
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(false);

	const handleShowNavbar = () => {
		setShowNavbar(!showNavbar);
	};

	return (
		<nav className="navbar">
			<div className="container">
				<div className="menu-icon" onClick={handleShowNavbar}>
					<MenuIcon />
				</div>
				<div className={`nav-elements  ${showNavbar && 'active'}`}>
					<ul>
						<li>
							<Link to="#about">About</Link>
						</li>
						<li>
							<Link to="#experience">Experience</Link>
						</li>
						<li>
							<Link to="#work">Work</Link>
						</li>
						<li>
							<Link to="#contact">Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
