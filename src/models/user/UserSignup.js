import React, { useState } from "react";
import { Form, Button, Container, Row, Col ,Alert} from "react-bootstrap";
import authdataServices from "../../services/authServices";

const UserSignup = () => {
	const [user, setUser] = useState({
		email: "",
		username: "",
		password: "",
	});
	const [message, setMessage] = useState();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((user) => ({ ...user, [name]: value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		var data = {
			username: user.username,
			email: user.email,
			password: user.password,
		};
		authdataServices
			.register(data)
			.then((response) => {
				if (response.status >= 400) {
					throw new Error("Server responds with error!");
				} else {
                    console.log(response.data);
                    if(response.data['message']){
                        setMessage(response.data['message'])
                    }
				}
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<div>
			<Container>
				<Row>
					<Col md={{ span: 6, offset: 3 }} className="mt-5">
						<h1>Create New Account</h1>
                        {message?(
                            <div>
                        	<Alert variant='success'>
								{message}
							</Alert>
						</div>
                        ):(
                            <div></div>
                        )}
						
						<Form  onSubmit={handleSubmit}>
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

							<Button variant="primary" type="submit">
								Signup
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default UserSignup;
