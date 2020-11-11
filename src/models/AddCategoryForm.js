import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import categoryDataService from "../services/categorySrvices";
import { useHistory } from "react-router-dom";

const AddCategoryForm = () => {
	const initialCategoryState = {
		id: null,
		category_name: "",
	};

	const [category_list, setCategory_list] = useState(initialCategoryState);
	
	const history = useHistory();

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setCategory_list({ ...category_list, [name]: value });
	};


	const saveCategory = (e) => {
		e.preventDefault();
		var data = {
			category_name: category_list.category_name,
		};

		categoryDataService
			.create(data)
			.then((response) => {
				// setCategory_list({
				//   id: response.data.id,
				//   category_name: response.data.category_name,
				// });
				// setSubmitted(true);
				if (response.status >= 400) {
					throw new Error("Server responds with error!");
				} else {
					history.push("/category");
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
						<Form>
							<Form.Group>
								<Form.Label>Category Name</Form.Label>
								<Form.Control
									type="text"
									id="category_name"
									placeholder="Enter Category Name"
									name="category_name"
									value={category_list.category_name}
									onChange={handleInputChange}
								/>
							</Form.Group>

							<Button variant="primary" type="submit" onClick={saveCategory}>
								Create Category
							</Button>

							<Button variant="light" href="/category">
								Cancel
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default AddCategoryForm;
