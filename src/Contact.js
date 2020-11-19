import React from "react";
import "./css/style.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
const Contact = () => {
	return (
		<div className="contact_us section-padding">
			<Container>
				<Row>
					<Col md={8}>
						<div className="contact_us">
							<h4>Write your message here</h4>
							<Form>
								<Form.Group controlId="name">
									<Form.Label>Name</Form.Label>
									<Form.Control type="text" placeholder="Enter your name" />
								</Form.Group>
								<Form.Group controlId="email">
									<Form.Label>Email address</Form.Label>
									<Form.Control type="email" placeholder="Enter your email" />
								</Form.Group>
								<Form.Group controlId="phone">
									<Form.Label>Phone</Form.Label>
									<Form.Control
										type="text"
										placeholder="Enter your phone number"
									/>
								</Form.Group>
								<Form.Group controlId="subject">
									<Form.Label>Subject</Form.Label>
									<Form.Control type="text" placeholder="Enter your subject" />
								</Form.Group>
								<Form.Group controlId="message">
									<Form.Label>Message</Form.Label>
									<Form.Control as="textarea" rows={3} />
								</Form.Group>

								<Button variant="primary" type="submit">
									Send Message
								</Button>
							</Form>
						</div>
					</Col>

					<Col md={4}>
						<div className="address_text">
							<div className="single_address">
								<h4>Give us a call or write to us about anything</h4>
								<p>
									<span>Tel</span>
								</p>
								<p>0 800 125 556 8944</p>
								<p>0 800 125 556 8945</p>
							</div>
							<div className="single_address">
								<p>
									<span>Email</span>
								</p>
								<p>info@coder.com</p>
							</div>
							<div className="single_address">
								<p>
									<span>Address:</span>
								</p>
								<p>102-104 Avenue des Champs-Élysées,</p>
								<p>75008 Paris, France</p>
							</div>
							<div className="single_address">
								<p>
									<span>Web:</span>
								</p>
								<p>http://efashionstore.herokuapp.com/</p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Contact;
