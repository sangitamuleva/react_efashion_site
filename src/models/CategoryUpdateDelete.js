import React, { useState, useEffect } from "react";
import CategoryDataService from "../services/categorySrvices";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

import { useHistory } from "react-router-dom";

const CategoryUpdateDelete = (props) => {
	const initialCategoryState = {
		id: null,
		category_name: "",
	};
	const [CurrentCategory, setCurrentCategory] = useState(initialCategoryState);


    const history = useHistory();
    
	const getCategory = (id) => {
		CategoryDataService.get(id)
			.then((response) => {
				setCurrentCategory(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	useEffect(() => {
		getCategory(props.match.params.id);
	}, [props.match.params.id]);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setCurrentCategory({ ...CurrentCategory, [name]: value });
	};

	const updateCategory = (e) => {
        e.preventDefault()
		CategoryDataService.update(CurrentCategory.id, CurrentCategory)
			.then((response) => {
				// setMessage("The tutorial was updated successfully!");
				if (response.status >= 400) {
					throw new Error("Server responds with error!");
				} else {
                    history.push("/category");
                    // this.context.router.history.push('/')
				}
			})
			
	};
	return (
		<Container>
			{CurrentCategory ? (
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
									value={CurrentCategory.category_name}
									onChange={handleInputChange}
								/>
							</Form.Group>

							<Button variant="primary" type="submit" onClick={updateCategory}>
								Update Category
							</Button>
							<Button variant="light" href="/category">
								Cancel
							</Button>
						</Form>
					</Col>
				</Row>
			) : (
				<div>
					<br />
					<p>Category Not Found</p>
				</div>
			)}
		</Container>
	);
};

export default CategoryUpdateDelete;
