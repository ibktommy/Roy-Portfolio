import React from 'react'
import "./Maclassics.scss";
import DetailsImg from "../../images/maclassis/main/Group 27063.png";
import UserflowReg from "../../images/maclassis/main/Registration.png";
import UserflowUpload from "../../images/maclassis/main/Uploading a product.png";
import UserflowPurchase from "../../images/maclassis/main/Making a Purchase.png";
import UserflowSitemap from "../../images/maclassis/main/MY sitemap.png";
import WireframingProduct from "../../images/maclassis/main/Product.png";
import WireframingWishlist from "../../images/maclassis/main/Wishlist.png";
import WireframingCart from "../../images/maclassis/main/Cart.png";
import WireframingCustomize from "../../images/maclassis/main/Customize.png";
import WireframingHome from "../../images/maclassis/main/Home.png";
import DesignBtnOne from "../../images/maclassis/main/Group 50.png";
import DesignBtnTwo from "../../images/maclassis/main/Button.png";
import DesignBtnThree from "../../images/maclassis/main/bottom nav.png";
import DesignBtnFour from "../../images/maclassis/main/MACLASSICS icon 1.png";
import ColorBox from "../../images/maclassis/main/Group 14 1.png";
import VisualGroup from "../../images/maclassis/main/Group 27067.png";
import VisualHome from "../../images/maclassis/main/HOME 3.png";
import VisualBag from "../../images/maclassis/main/Bag.png";
import VisualSummary from "../../images/maclassis/main/Checkout-SUMMARY.png";
import VisualDelivery from "../../images/maclassis/main/Checkout-DELIVERY.png";
import VisualPayment from "../../images/maclassis/main/Checkout-PAYMENT.png";
import VisualCongrats from "../../images/maclassis/main/CONGRATS 1.png";
import ProfileImg from "../../images/maclassis/main/Profile 1.png";
import Footer from "../../components/Footer";

const Maclassics = () => {
	return (
		<section className="maclassics animate__animated animate__fadeInUp">
			<header className="project-header">
				Maclassics is a cake and confectionaries company that produces and sells
				cakes to customers. I created the brand design and shaped user
				experience for Maclassics app.
			</header>

			<div className="gen-details flex">
				<div className="gen-details-left row-flex">
					<div className="gen-details-left_role">
						<h4>My Role</h4>
						<p>Product designer, User research, prototyping.</p>
					</div>
					<div className="gen-details-left_period">
						<h4>Duration</h4>
						<p>Oct 2021- Jan 2022</p>
					</div>
				</div>

				<div className="gen-details-right">
					<div className="gen-details-right_impact">
						<h4>Impact</h4>
						<p>
							There has been a wide use of the maclassic app by customers to
							place orders. The upload and customize function has made the app a
							first choice for many users.
							<br />
							<br />
							The use of design system and user flow process reduced production
							time by the development team. Maclassic cakes have seen a steady
							increase in sales revenue with the app accounting for over 40% of
							sales since its launch.
						</p>
					</div>
				</div>
			</div>

			<div className="details-img flex">
				<img src={DetailsImg} alt="details-img" />
			</div>

			<div className="gen-details-about">
				<h4>About</h4>
				<p>
					Maclassics is a confectionary establishment which focuses primarily in
					making cakes for sales while combining it with top notch cutomer
					services with delivery a top priority. It’s headquaters is in Lagos,
					Nigeria and it has an operational area covering mainly the southern
					region and Federal capital territory of Nigeria. Maclassics is a fast
					growing confectionary company emerging from western Africa.
				</p>
			</div>

			<div className="gen-details-statement">
				<h4>Statement of the problem </h4>
				<p>
					The company do not have a mobile platform to recieve orders and
					coordinate deliveries to its cutomers across the country. In
					developing an insight into what will be needed for the company’s
					mobile application the following pain points were discovered. The need
					for a platform to request for cake designs seen somewhere else which
					gives a customization power to users. The need for an app that
					provides a wide range of cakes suitable for numerous events. A
					platform that can facilitate the request and delivery of preferred
					flavours at a preset date and time in a quick process .
				</p>
			</div>

			<div className="gen-details-userflow">
				<h4>User Flows</h4>
				<p>
					In other to ensure a smooth experience for our users the customer
					journey map has been simplified to very few screens to enable the
					completion of tasks in just a few taps. A simplified user flow map is
					key to the design process of Maclassics mobile app.
				</p>
			</div>

			<div className="details-img flex">
				<img src={UserflowReg} alt="details-img" />
			</div>

			<div className="details-img flex">
				<img src={UserflowUpload} alt="details-img" />
			</div>

			<div className="details-img flex">
				<img src={UserflowPurchase} alt="details-img" />
			</div>

			<div className="details-img flex">
				<img src={UserflowSitemap} alt="details-img" />
			</div>

			<div className="gen-details-wireframe">
				<h4>Wireframing</h4>
				<p>
					I designed a well detailed wireframe screens to show the user flows in
					a design manner and enable testing and evaluation of the processes
					involved to ensure the production of a problem sloving, goal
					achieveing high fidelity design.
				</p>

				<div className="image-container">
					<img src={WireframingProduct} alt="wireframe-product" />
					<img src={WireframingWishlist} alt="wireframe-wishlist" />
					<img src={WireframingCart} alt="wireframe-cart" />
					<img src={WireframingCustomize} alt="wireframe-customize" />
					<img src={WireframingHome} alt="wireframe-home" />
				</div>
			</div>

			<div className="gen-details-design">
				<h4>Design System </h4>
				<p>
					To boost the time efficiency of the production team, I have created
					various reuseable components for the design system. Design sytems also
					help users identify patterns while on the app.
				</p>

				<div className="gen-details-design-images">
					<div className="gen-details-design-images_top flex">
						<img src={DesignBtnOne} alt="design-btn" />
						<img src={DesignBtnTwo} alt="design-btn" />
						<img src={DesignBtnThree} alt="design-btn" />
					</div>
					<div className="gen-details-design-images_bottom flex">
						<div className="image-container">
							<img src={DesignBtnFour} alt="design-btn" />
						</div>
					</div>
				</div>
			</div>

			<div className="gen-details-color">
				<h4>Color</h4>
				<p>
					To boost the time efficiency of the production team, I have created
					various reuseable components for the design system. Design sytems also
					help users identify patterns while on the app.
				</p>

				<div className="details-img flex">
					<img src={ColorBox} alt="details-img" />
				</div>
			</div>

			<div className="gen-details-visual">
				<h4>Visual Design</h4>
				<h5>
					Building of icons to simplify the uploading of cakes for designated
					customization for personal user requests.
				</h5>
				<p>
					A set of icons were used in the final design including a custom icon
					which is used to solve the problem of uploading customized cakes.
					<br />
					<br />
					The customized icon which is{" "}
					<strong>
						based on the Maclassics logo is situated at the center of the bottom
						navigation, to serve as a call to action for uploading images from
						the camera or gallery and texts to enable the customization and
						request of cake designs by our users.
					</strong>
					<br />
					It was placed there to make it easy to spot and tap for quick user
					journey and it is available on all screens on the app.
					<br />
					<br />
					The customization screen is designed to provide a significant user
					experience, users also have the option to contact the customer
					sewrvice for further information on their requests.
				</p>

				<div className="image-container flex">
					<img src={VisualGroup} alt="details-img" />
				</div>

				<h5>
					The main menu has been well categorized with user experience in mind.
					The screen is divided to enable users browse thier wants by event and
					flavour.
				</h5>

				<p>
					As part of the company’s objectives to deliver cakes in a personal
					manner to users, I have helped shape the UI to enable users in one
					click find what they are looking for without using the search box.
					Users can now browse and test out the company’s products. It also
					helps the company showcase its expertise and designs on many different
					events
				</p>

				<div className="image-container flex">
					<img src={VisualHome} alt="details-img" />
				</div>

				<div className="gen-details-visual_process">
					<h5>
						Checkout process for maclassic have been designed to accomodate only
						three screens.
					</h5>
					<ol>
						<li>Delivey</li>
						<li>Payment</li>
						<li>Summary</li>
					</ol>

					<p>
						I have sectioned the checkout process to enable all neccessary
						information be entered by the users. A calendar and delivery time
						has been included in the delivery screen because cakes are timely
						products that may lose its significance if not made ready at the
						specific time its needed.
					</p>

					<div className="image-container">
						<img src={VisualBag} alt="design-img" />
						<img src={VisualSummary} alt="design-img" />
						<img src={VisualDelivery} alt="design-img" />
						<img src={VisualPayment} alt="design-img" />
						<img src={VisualCongrats} alt="design-img" />
					</div>
				</div>
			</div>

			<div className="gen-details-profile">
				<h4>Detailed</h4>
				<p>
					Orders can be viewed and payment cards can be accessed on the user
					profile page. An address can also be saved to autofill during checkout
					from the profile page.
				</p>

				<div className="details-img flex">
					<div className="image-container flex">
						<img src={ProfileImg} alt="details-img" />
					</div>
				</div>
			</div>

			<Footer children={"maclassics cakes"} />
		</section>
	);
};

export default Maclassics