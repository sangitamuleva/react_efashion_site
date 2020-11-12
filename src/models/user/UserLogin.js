import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const UserLogin = () => {
	return (
		<div>
			<Container>
				<Row>
					<Col md={{ span: 6, offset: 3 }} className="mt-5">
                        <h1>Login Form</h1>
						<Form>
							<Form.Group>
								<Form.Label>Username</Form.Label>
								<Form.Control type="text" placeholder="Enter username" />
							</Form.Group>

							<Form.Group>
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" />
							</Form.Group>

							<Button variant="primary" type="submit">
								Login
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default UserLogin;
