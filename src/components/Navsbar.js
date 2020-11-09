import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export const Navsbar = (props) => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">Efashion</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/home" className='outline-success'>Home</Nav.Link>
					<Nav.Link href="/about">About Us</Nav.Link>
					<Nav.Link href="/contact">Contact</Nav.Link>
				</Nav>
			
			</Navbar.Collapse>
		</Navbar>
	);
};
