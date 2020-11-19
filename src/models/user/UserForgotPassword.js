// import React from "react";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import React, { useState, useRef } from "react";
import { forgot_password } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const UserForgotPassword = (props) => {
	const form = useRef();
	// const checkBtn = useRef();

	const [email, setEmail] = useState();
	const [username, setUsername] = useState();
	const { isLoggedIn } = useSelector((state) => state.auth);
	const { message } = useSelector((state) => state.message);
	const [successful, setSuccessful] = useState(false);

	const dispatch = useDispatch();

	const handleChangeemail = (e) => {
		const { name, value } = e.target;
		setEmail(value);
	};
	const handleChangeusername = (e) => {
		const { name, value } = e.target;
		setUsername(value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		setSuccessful(false);
		var data = {
			email: email,
			username:username
		};

		dispatch(forgot_password(data))
			.then(() => {
				setSuccessful(true);
				setEmail("");
				setUsername("")
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
						<h1>Forgot Password Form</h1>
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
							<Form.Group>
									<Form.Label>Username</Form.Label>
									<Form.Control
										type="text"
										name="username"
										value={username}
										onChange={handleChangeusername}
										placeholder="Enter username"
										required
									/>
								</Form.Group>
							<Form.Group>
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									name="email"
									value={email}
									onChange={handleChangeemail}
									placeholder="Enter email"
									required
								/>
							</Form.Group>

							<Form.Group>
								<Button variant="primary" type="submit">
									Send Email
								</Button>
							</Form.Group>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default UserForgotPassword;
