import React, { useState, useEffect } from "react";
import "./../css/style.css";
import { Table, Button, Modal, Form } from "react-bootstrap";

const Category = () => {
	// initialize category list using usestate hooks
	const [category_list, setCategory_list] = useState([]);

	// open close model
	const [modalShow, setModalShow] = React.useState(false);

	// for category update
	// for category update
	const [category_name, setCategory_name] = useState("");

	// useffect hook to fetch data ,fire when app loads
	useEffect(() => {
		let api_url = "http://127.0.0.1:8000/category/";
		const getCategory = () => {
			fetch(api_url)
				.then((res) => {
					// Unfortunately, fetch doesn't send (404 error)
					// into the cache itself
					// You have to send it, as I have done below
					if (res.status >= 400) {
						throw new Error("Server responds with error!");
					}
					return res.json();
				})
				.then((categories) => {
					setCategory_list(categories);
				});
		};

		getCategory();
	}, []);

	function MyVerticallyCenteredModal(props) {
		return (
			<Modal
				animation={false}
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Update Category
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId="category_name" onSubmit={(e)=>update_category(e,props)}>
							<Form.Label>Category Name</Form.Label>
							<Form.Control
								type="text"
								placeholder={props.category.category_name}
								value={category_name}
								onChange={(e) => setCategory_name(e.target.value)}
							/>
						</Form.Group>
						<Button onClick={props.onHide} variant="light">
							Cancel
						</Button>{" "}
						<Button variant="primary" type="submit">
							Update
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer></Modal.Footer>
			</Modal>
		);
	}
	// ------------------------------
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

	// -------------------------------
	// update category
	const update_category = (e) => {
		// e.preventDefault();
		console.log(e);
		var add_url = `http://127.0.0.1:8000/category/update/$/`;
		var csrf_token = getCookie("csrftoken");

		fetch(add_url, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
				"X-CSRFToken": csrf_token,
			},
			body: JSON.stringify({ category_name }),
		}).then((res) => {
			if (res.status >= 400) {
				throw new Error("Server responds with error!");
			}
		});
	};

	// ---------------------------------------
	return (
		<div>
			<h1 className="text-center mt-4 pt-4">Categories</h1>
			{/* <Button variant="primary">Add New</Button>{" "} */}

			<Table striped bordered hover className="mt-5 pt-5">
				<thead>
					<tr>
						<th>#</th>
						<th>Category Name</th>
						<th colSpan={2}>Actions</th>
					</tr>
				</thead>
				<tbody>
					{category_list.map((c) => (
						<tr key={c.id}>
							<td>#</td>
							<td>{c.category_name}</td>
							<td>
								<Button variant="info" onClick={() => setModalShow(true)}>
									Update
								</Button>{" "}
								<MyVerticallyCenteredModal
									show={modalShow}
									onHide={() => setModalShow(false)}
									category={c}
								/>
							</td>
							<td>
								<Button variant="danger">Delete</Button>{" "}
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default Category;
