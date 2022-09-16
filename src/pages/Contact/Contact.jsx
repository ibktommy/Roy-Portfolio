import React from "react";
import "./Contact.scss";

const Contact = () => {
	return (
		<section className="contact">
			<h2 className="title">Contact Me</h2>

			<p className="para">
				I am available for any official, freelance and contract works. Do drop
				your message and I will reach back to you almost immediately. Gracias!
				&#128526; &#9996;
			</p>

			<div className="contact-details">
				<form className="form row-flex">
					<div className="form-card">
						<input type="text" placeholder="First Name" />
						<input type="text" placeholder="Last Name" />
					</div>
					<div className="form-card">
						<input type="email" placeholder="Email" />
						<input type="text" placeholder="Subject" />
					</div>
					<textarea placeholder="Message"></textarea>
					<button type="submit">Send</button>
				</form>

				<div className="contact-details-info row-flex">
					<div className="contact-details-info_card">
						<i className="fa-solid fa-location-dot"></i>
						<div className="contact-details-info_card-para">
							<h5>Address</h5>
							<p>Lagos, Nigeria.</p>
						</div>
					</div>
					<div className="contact-details-info_card">
						<i className="fa-solid fa-at"></i>
						<div className="contact-details-info_card-para">
							<h5>Email</h5>
							<p>roy@gmail.com</p>
						</div>
					</div>
					<div className="contact-details-info_card">
						<i className="fa-solid fa-phone"></i>
						<div className="contact-details-info_card-para">
							<h5>Mobile</h5>
							<p>+234 906 890 3908</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
