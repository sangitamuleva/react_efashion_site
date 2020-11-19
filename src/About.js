import React from "react";

import person1 from "./images/product/person1.jpg";
import person2 from "./images/product/person2.jpg";
import person3 from "./images/product/person3.jpg";

const About = () => {
	return (
		<div>
			<section className="choose_area section-padding">
				<div className="container">
					<div className="choose_area_text text-center">
						<div className="choose_title">
							<h2>WHY CHOOSE OUR PRODUCT ?</h2>
						</div>
						<div className="choose_text">
							<i className="flaticon-lightbulbs"></i>
							<h5>
								<a href="#">UNIQUE DESIGN</a>
							</h5>
							<div className="text_p">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Tempore ab odio quas ipsam sed quo minima
								</p>
							</div>
						</div>
						<div className="choose_text choose_active">
							<i className="flaticon-sticker3"></i>
							<h5>
								<a href="#">best quality</a>
							</h5>
							<div className="text_p">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Tempore ab odio quas ipsam sed quo minima
								</p>
							</div>
						</div>
						<div className="choose_text">
							<i className="flaticon-tshirt17"></i>
							<h5>
								<a href="#">COMFORTABLE TEES</a>
							</h5>
							<div className="text_p">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Tempore ab odio quas ipsam sed quo minima
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="review_area section-padding">
				<div className="container">
					<div className="review_text text-center">
						<div className="review_title">
							<h2>OUR TEAM</h2>
						</div>
						<div
							id="review_carousel_1"
							className="carousel slide"
							data-ride="carousel"
						>
							<div className="carousel-inner" role="listbox">
								<div className="item active">
									<div className="single_review">
										<img src={person1} alt="" />
										<h5>
											<a href="#">Michelle Wilson</a>
										</h5>
										<p>
											Lorem Ipsum is simply dummy text of the printing and
											typesetting industry Lorem Ipsum has been the industry's
										</p>
										<div className="review_line"></div>
										<div className="review_icon">
											<i>“</i>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="single_review">
										<img src={person2} alt="" />
										<h5>
											<a href="#">Michelle Wilson</a>
										</h5>
										<p>
											Lorem Ipsum is simply dummy text of the printing and
											typesetting industry Lorem Ipsum has been the industry's
										</p>
										<div className="review_line"></div>
										<div className="review_icon">
											<i>“</i>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="single_review">
										<img src={person3} alt="" />
										<h5>
											<a href="#">Michelle Wilson</a>
										</h5>
										<p>
											Lorem Ipsum is simply dummy text of the printing and
											typesetting industry Lorem Ipsum has been the industry's
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="choose_area pb-5 pt-5">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-12">
							<div className="choose_area_text text-center">
								<div className="choose_text  m-2 p-2">
									<i className="flaticon-lightbulbs"></i>
									<h5>
										<a href="#">5 BUSINESS YEARS</a>
									</h5>
								</div>
								<div className="choose_text  m-2 p-2">
									<i className="flaticon-lightbulbs"></i>
									<h5>
										<a href="#">36 STORES</a>
									</h5>
								</div>
								<div className="choose_text  m-2 p-2">
									<i className="flaticon-lightbulbs"></i>
									<h5>
										<a href="#">100 EMPLOYEES</a>
									</h5>
								</div>
								<div className="choose_text  m-2 p-2">
									<i className="flaticon-lightbulbs"></i>
									<h5>
										<a href="#">6000 CUSTOMERS</a>
									</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
