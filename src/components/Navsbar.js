import React, {  useEffect } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../helpers/history";
import { logout } from "../actions/auth";
import { clearMessage } from "../actions/messages";

export const Navsbar = (props) => {
	const { user: currentUser } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		history.listen((location) => {
			dispatch(clearMessage()); // clear message when changing location
		});
	}, [dispatch]);

	const logOut = () => {
		dispatch(logout());
	};

	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">Efashion</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				{!currentUser ? (
					<Nav className="mr-auto">
						<Nav.Link href="/" className="outline-success">
							Home
						</Nav.Link>
						<Nav.Link href="/shop">Shop</Nav.Link>
						<Nav.Link href="/about">About Us</Nav.Link>
						<Nav.Link href="/contact">Contact</Nav.Link>

						<Nav.Link href="/signup">Signup</Nav.Link>
						<Nav.Link href="/login">Login</Nav.Link>
					</Nav>
				) : (
					<Nav>
						<div className="navbar-nav float-right">
							<Nav.Link href="/" className="outline-success">
								Home
							</Nav.Link>
							<Nav.Link href="/shop">Shop</Nav.Link>
							<Nav.Link href="/about">About Us</Nav.Link>
							<Nav.Link href="/contact">Contact</Nav.Link>
							<NavDropdown title="Category" id="category_dropdown">
								<NavDropdown.Item href="/category/add">
									ADD Category
								</NavDropdown.Item>
								<NavDropdown.Item href="/category">
									VIEW Category
								</NavDropdown.Item>
							</NavDropdown>

							<Nav.Link href="/logout" onClick={logOut}>
								Logout
							</Nav.Link>
						</div>
					</Nav>
				)}
			</Navbar.Collapse>
		</Navbar>
	);
};
