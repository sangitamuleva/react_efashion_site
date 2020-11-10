import React from "react";
import { Nav, Navbar,NavDropdown } from "react-bootstrap";

export const Navsbar = (props) => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">Efashion</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/home" className="outline-success">
						Home
					</Nav.Link>
					
					<NavDropdown title="Category" id="category_dropdown">
						<NavDropdown.Item href="/category/add">ADD Category</NavDropdown.Item>
						<NavDropdown.Item href="/category">
							VIEW Category
						</NavDropdown.Item>
						
					</NavDropdown>
					<Nav.Link href="/about">About Us</Nav.Link>
					<Nav.Link href="/contact">Contact</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
