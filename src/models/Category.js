import React, { useState, useEffect } from "react";
import "./../css/style.css";
import { Table, Button } from "react-bootstrap";

import categoryDataService from "../services/categorySrvices";
import { Link } from "react-router-dom";

import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Category = () => {
	const { isLoggedIn } = useSelector((state) => state.auth);
	// const { user: currentUser } = useSelector((state) => state.auth);

	// initialize category list using usestate hooks
	const [category_list, setCategory_list] = useState([]);

	// useffect hook to fetch data ,fire when app loads
	useEffect(() => {
		if (isLoggedIn === true) {
			retrieveAllCategory();
		}
	}, []);

	if (isLoggedIn === false) {
		return <Redirect to="/login" />;
	}
	const retrieveAllCategory = () => {
		console.log(isLoggedIn);

		categoryDataService
			.getAll()
			.then((response) => {
				setCategory_list(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	const refreshList = () => {
		retrieveAllCategory();
	};

	const deleteCategory = (id) => {
		categoryDataService
			.remove(id)
			.then((response) => {
				refreshList();
				// history.push("/category");
			})
			.catch((e) => {
				console.log(e);
			});
	};
	return (
		<div>
			<h1 className="text-center mt-4 pt-4">Categories</h1>

			<Table striped bordered hover className="mt-5 pt-5">
				<thead>
					<tr>
						<th>#</th>
						<th>Category Name</th>
						<th colSpan={2}>Actions</th>
					</tr>
				</thead>
				<tbody>
					{category_list ? (
						category_list.map((category, index) => (
							<tr key={index}>
								<td>#</td>
								<td>{category.category_name}</td>
								<td>
									<Link to={"/category/" + category.id}>Update</Link>{" "}
								</td>
								<td>
									<Button
										variant="danger"
										onClick={(e) => deleteCategory(category.id)}
									>
										Delete
									</Button>{" "}
								</td>
							</tr>
						))
					) : (
						<tr>
							<td>No Category</td>
						</tr>
					)}
				</tbody>
			</Table>
		</div>
	);
};

export default Category;
