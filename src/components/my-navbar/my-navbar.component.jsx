import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../assets/icons/logow.png';
import './my-navbar.styles.css';

const MyNavbar = () => {
	return (
		<div>
			<Navbar fixed="top" variant="dark" expand="md" className="animate-navbar nav-theme justify-content-between">
				<div>
					<Navbar.Brand href="#home">
						<img className="logo" src={Logo} alt="NO_IMAGE" />
					</Navbar.Brand>
				</div>
				<div>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto ">
							<Nav.Link href="#home" className='link'>Home</Nav.Link>
							<Nav.Link href="#about" className='link'>About Us</Nav.Link>
							<Nav.Link href="#events" className='link'>Events</Nav.Link>
							<Nav.Link href="#experience" className='link'>Experience</Nav.Link>
							
							<Nav.Link href="#contact" className='link'>Contact</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
		</div>
	);
};

export default MyNavbar;
