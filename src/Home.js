import React from "react";
import bag1 from "./images/product/bag1.png";
import sandle from "./images/product/sandle.png";
import t2 from "./images/product/t2.png";
const Home = () => {
	return (
		<div>
			<section class="product_area section-padding">
				<div class="padding_right main_single_product">
					<div class="single_product">
						<div class="product_img">
							<img src={bag1} alt="DARK BLUE IMAGE" />
						</div>
						<div class="product_text dark_product">
							<h1>ORANGE BAG</h1>
						</div>
					</div>
				</div>
				<div class="padding_left main_single_product">
					<div class="single_product single_product_two">
						<div class="product_img">
							<img src={bag1} alt="DARK BLUE IMAGE" />
						</div>
						<div class="product_text_two product_text">
							<h1>WOMEN'S BAG</h1>

							<p>COLOR: Orange</p>
							<p>Double handles with 3.5" Drop</p>
							<p>Detachable 21.5" Strap for shoulder</p>
							<p>PRICE: ₹ 1999</p>
							<a class="shop_now_btn" href="/">
								SHOP NOW
							</a>
						</div>
					</div>
				</div>
				<div class="padding_right main_single_product section-padding-top">
					<div class="single_product single_product_two">
						<div class="product_img tre_shirt_2">
							<img src={t2} alt="DARK BLUE IMAGE" />
						</div>
						<div class="product_text_two tre_shirt_2_text product_text">
							<h1>MEN'S TEE</h1>
							<p>100% COMBED COTTON</p>
							<p>COLOR: WHITE & BLACK</p>
							<p>ROUND NECK & HALF SLEEVES</p>
							<p>Classic fit, slightly long</p>
							<p>GSM: 180</p>
							<p>PRICE: ₹ 999</p>
							<a class="shop_now_btn" href="/">
								SHOP NOW
							</a>
						</div>
					</div>
				</div>
				<div class="padding_left main_single_product section-padding-top">
					<div class="single_product">
						<div class="product_img tre_shirt_2">
							<img src={t2} alt="DARK BLUE IMAGE" />
						</div>
						<div class="product_text dark_product">
							<h1>WHITE & BLACK</h1>
						</div>
					</div>
				</div>
				<div class="padding_right main_single_product section-padding-top">
					<div class="single_product">
						<div class="product_img tre_shirt_3">
							<img src={sandle} alt="DARK BLUE IMAGE" />
						</div>
						<div class="product_text dark_product">
							<h1>RED HEELS</h1>
						</div>
					</div>
				</div>
				<div class="padding_left main_single_product section-padding-top">
					<div class="single_product single_product_two">
						<div class="product_img tre_shirt_3">
							<img src={sandle} alt="DARK BLUE IMAGE" />
						</div>
						<div class="product_text_two product_text">
							<h1>LADIES TEE</h1>
							<p>Closure: Buckle</p>
							<p>COLOR: RED</p>
							<p>Shoe Width: Narrow</p>

							<p>PRICE: ₹ 1599</p>
							<a class="shop_now_btn" href="/">
								SHOP NOW
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
