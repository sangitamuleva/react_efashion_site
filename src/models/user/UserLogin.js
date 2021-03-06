// import React from "react";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import React, { useState, useRef } from "react";
import { login } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
const UserLogin = (props) => {
	const form = useRef();

	const [user, setUser] = useState({
		username: "",
		password: "",
	});

	const { isLoggedIn } = useSelector((state) => state.auth);
	const { message } = useSelector((state) => state.message);

	const dispatch = useDispatch();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((user) => ({ ...user, [name]: value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		var data = {
			username: user.username,
			password: user.password,
		};

		dispatch(login(data))
			.then(() => {
				props.history.push("/category");
				window.location.reload();
			})
			.catch((e) => {});
	};
	if (isLoggedIn) {
		return <Redirect to="/category" />;
	}

	return (
		<div>
			<Container>
				<Row>
					<Col md={{ span: 6, offset: 3 }} className="mt-5">
						<h1>Login Form</h1>
						<Form onSubmit={handleSubmit} ref={form}>
							{message && (
								<div className="form-group">
									<div className="alert alert-danger" role="alert">
										{message}
									</div>
								</div>
							)}
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
									Forgot password?{" "}
									<a href="/forgot_password">Forgot Password</a>
								</Form.Text>
							</Form.Group>

							<Form.Group>
								<Button variant="primary" type="submit">
									Login
								</Button>
							</Form.Group>
							<Form.Group>
								<Form.Text muted>
									Want to create new account? <a href="/signup">Signup</a>
								</Form.Text>
							</Form.Group>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default UserLogin;
