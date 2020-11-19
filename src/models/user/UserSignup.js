import { Form, Button, Container, Row, Col, FormGroup } from "react-bootstrap";
import React, { useState, useRef } from "react";
import { register } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const UserSignup = () => {
	const form = useRef();

	const [user, setUser] = useState({
		email: "",
		username: "",
		password: "",
	});

	const [successful, setSuccessful] = useState(false);
	const { isLoggedIn } = useSelector((state) => state.auth);

	const { message } = useSelector((state) => state.message);

	const dispatch = useDispatch();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((user) => ({ ...user, [name]: value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		setSuccessful(false);

		var data = {
			username: user.username,
			email: user.email,
			password: user.password,
		};

		dispatch(register(data))
			.then(() => {
				setSuccessful(true);
			})
			.catch((e) => {
				setSuccessful(false);
			});
	};

	if (isLoggedIn) {
		return <Redirect to="/category" />;
	}

	return (
		<div>
			<Container>
				<Row>
					<Col md={{ span: 6, offset: 3 }} className="mt-5">
						<h1>Create New Account</h1>

						<Form onSubmit={handleSubmit} ref={form}>
							{message && (
								<div className="form-group">
									<div
										className={
											successful ? "alert alert-success" : "alert alert-danger"
										}
										role="alert"
									>
										{message}
									</div>
								</div>
							)}

							<div>
								<Form.Group>
									<Form.Label>Username</Form.Label>
									<Form.Control
										type="text"
										name="username"
										value={user.username}
										onChange={handleChange}
										placeholder="Enter username"
										required
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>Email address</Form.Label>
									<Form.Control
										type="email"
										name="email"
										value={user.email}
										onChange={handleChange}
										placeholder="Enter email"
										required
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										name="password"
										value={user.password}
										onChange={handleChange}
										placeholder="Password"
										required
									/>
								</Form.Group>
								<Form.Group>
									<Form.Text muted>
										Already have an account? <a href="/login">Login</a>
									</Form.Text>
								</Form.Group>
								<FormGroup>
									<Button variant="primary" type="submit">
										Signup
									</Button>
								</FormGroup>
							</div>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default UserSignup;
