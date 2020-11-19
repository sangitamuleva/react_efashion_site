// import React from "react";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";
import {
	Form,
	Button,
	Container,
	Row,
	Col,
} from "react-bootstrap";
import React, { useState, useRef } from "react";
import { reset_password } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const ResetPasswordConfirm = (props) => {
	const form = useRef();
	// const checkBtn = useRef();

	const [password, setPassword] = useState();
	const [token, setToken] = useState();

	const { isLoggedIn } = useSelector((state) => state.auth);
	const { message } = useSelector((state) => state.message);
	const [successful, setSuccessful] = useState(false);

	const dispatch = useDispatch();

	const handleChangepassword = (e) => {
		const { name, value } = e.target;
		setPassword(value);
	};
	const handleChangetoken = (e) => {
		const { name, value } = e.target;
		setToken(value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		setSuccessful(false);
		var data = {
			password: password,
			token: token,
		};

		dispatch(reset_password(data))
			.then(() => {
				setSuccessful(true);

				setPassword("");
				setToken("");
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
						<h1>Reset Password Form</h1>
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
								<Form.Label>Token</Form.Label>
								<Form.Control
									type="text"
									name="token"
									value={token}
									onChange={handleChangetoken}
									placeholder="Enter token"
									required
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>New Password</Form.Label>
								<Form.Control
									type="password"
									name="password"
									value={password}
									onChange={handleChangepassword}
									placeholder="New Password"
									required
								/>
							</Form.Group>
							<Form.Group>
								<Button variant="primary" type="submit">
									Change Password
								</Button>
							</Form.Group>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default ResetPasswordConfirm;
