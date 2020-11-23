import React from "react";
import { Form, Button, Container, Row, Col, FormGroup } from "react-bootstrap";

import bag1 from "./images/product/bag1.png";
import sandle from "./images/product/sandle.png";
const Shop = () => {
	return (
		<div>
			<div class="container-fluid mt-3">
				<div className="row">
					<div id="products" className="col-lg-12">
						<div className="row mx-auto">
							<div
								className="card mx-auto mb-3"
								id=""
								style={{ width: "18rem" }}
							>
								<img src={bag1} className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">ORANGE BAG</h5>
									<p className="card-text">Orange handbad</p>
								</div>
								<div className="m-4">
									<h5 className="card-title">$20</h5>
								</div>
								<div className="card-footer">
									<input
										type="submit"
										className="float-right btn btn-light  form-control"
										value="Add To Cart"
									/>
								</div>
							</div>

							<div
								className="card mx-auto mb-3"
								id=""
								style={{ width: "18rem" }}
							>
								<img src={bag1} className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">ORANGE BAG</h5>
									<p className="card-text">Orange handbad</p>
								</div>
								<div className="m-4">
									<h5 className="card-title">$20</h5>
								</div>
								<div className="card-footer">
									<input
										type="submit"
										className="float-right btn btn-light  form-control"
										value="Add To Cart"
									/>
								</div>
							</div>
							<div
								className="card mx-auto mb-3"
								id=""
								style={{ width: "18rem" }}
							>
								<img src={bag1} className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">ORANGE BAG</h5>
									<p className="card-text">Orange handbad</p>
								</div>
								<div className="m-4">
									<h5 className="card-title">$20</h5>
								</div>
								<div className="card-footer">
									<input
										type="submit"
										className="float-right btn btn-light  form-control"
										value="Add To Cart"
									/>
								</div>
							</div>
							<div
								className="card mx-auto mb-3"
								id=""
								style={{ width: "18rem" }}
							>
								<img src={bag1} className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">ORANGE BAG</h5>
									<p className="card-text">Orange handbad</p>
								</div>
								<div className="m-4">
									<h5 className="card-title">$20</h5>
								</div>
								<div className="card-footer">
									<input
										type="submit"
										className="float-right btn btn-light  form-control"
										value="Add To Cart"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shop;
