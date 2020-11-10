import React, { useState, useEffect } from "react";
import { Button, Form ,Container,Row,Col} from "react-bootstrap";

import { useHistory } from "react-router-dom";

const AddCategoryForm = () => {
	const [category_name, setCategory_name] = useState("");

	const history = useHistory();

	const getCookie = (name) => {
		let cookieValue = null;
		if (document.cookie && document.cookie !== "") {
			const cookies = document.cookie.split(";");
			for (let i = 0; i < cookies.length; i++) {
				const cookie = cookies[i].trim();
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, name.length + 1) === name + "=") {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	};
	const Add_category = (e) => {
		e.preventDefault();

		var add_url = `http://127.0.0.1:8000/category/create/`;
		var csrf_token = getCookie("csrftoken");

		fetch(add_url, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
				"X-CSRFToken": csrf_token,
			},
			body: JSON.stringify({ category_name }),
		}).then((res) => {
			// Unfortunately, fetch doesn't send (404 error)
			// into the cache itself
			// You have to send it, as I have done below
			if (res.status >= 400) {
				throw new Error("Server responds with error!");
			} else {
				history.push("/category");
			}
		});

		setCategory_name(" ");
	};

	return (
		<div>
			<Container>
				<Row>
                    <Col md={{ span: 6, offset: 3 }} className="mt-5">
					<Form onSubmit={Add_category}>
						<Form.Group controlId="category_name">
							<Form.Label>Category Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Category Name"
								name="category_name"
								value={category_name}
								onChange={(e) => setCategory_name(e.target.value)}
							/>
						</Form.Group>

						<Button variant="primary" type="submit">
							Create Category
						</Button>
					</Form>
                    </Col>
				</Row>
			</Container>
		</div>
	);
};

export default AddCategoryForm;
