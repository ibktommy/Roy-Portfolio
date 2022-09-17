import React, { useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.scss";
import FormImage from "../../images/logo/thanks.gif";

// Formspree Key
const formSpreeKey = process.env.REACT_APP_FORMSPREE_KEY;

const Contact = () => {
	// Form State
	const [state, handleSubmit] = useForm(`${formSpreeKey}`);

	if (state.succeeded) {
		return (
			<div className="form-success animate__animated animate__zoomInDown">
				<p className="form-text">
					Your Message as been sent, I will respond shortly. Thanks!
				</p>
				<img src={FormImage} alt="formgif" />
			</div>
		);
	}

	return (
		<section className="contact animate__animated animate__fadeInDown">
			<h2 className="title">Contact Me</h2>

			<p className="para">
				I am available for any official, freelance and contract works. Do drop
				your message and I will reach back to you almost immediately. Gracias!
				&#128526;
			</p>

			<div className="contact-details">
				<form method="POST" className="form row-flex" onSubmit={handleSubmit}>
					<div className="form-card">
						<input
							id="first-name"
							name="First Name"
							type="text"
							placeholder="First Name"
						/>
						<ValidationError
							prefix="First Name"
							field="first-name"
							errors={state.errors}
						/>
						<input
							id="last-name"
							name="Last Name"
							type="text"
							placeholder="Last Name"
						/>
						<ValidationError
							prefix="Last Name"
							field="last-name"
							errors={state.errors}
						/>
					</div>
					<div className="form-card">
						<input id="email" name="email" type="email" placeholder="Email" />
						<ValidationError
							prefix="Email"
							field="email"
							errors={state.errors}
						/>
						<input
							id="subject"
							name="subject"
							type="text"
							placeholder="Subject"
						/>
						<ValidationError
							prefix="Subject"
							field="subject"
							errors={state.errors}
						/>
					</div>
					<textarea id="message" name="messsage" placeholder="Message" />
					<ValidationError
						prefix="Message"
						field="message"
						errors={state.errors}
					/>
					<button type="submit" disabled={state.submitting}>
						Send
					</button>
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
							<p>ayodejiroy@gmail.com</p>
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

			<p className="footer">&copy; AtomDev et Roy, 2022 &#128526; &#9996;</p>
		</section>
	);
};

export default Contact;
