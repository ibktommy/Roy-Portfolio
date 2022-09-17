import React, { useRef, useState } from "react";
import "./Contact.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Formspree Key
const formSpreeKey = process.env.REACT_APP_FORMSPREE_KEY;
const url = `https://formcarry.com/s/${formSpreeKey}`;

const Contact = () => {
	// Set State for Contact Page
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	let navigate = useNavigate();

	// Function to Submit Form
	const formSubmitHandler = async (e) => {
		e.preventDefault();

		if (
			firstName === "" ||
			lastName === "" ||
			email === "" ||
			message === "" ||
			subject === ""
		) {
			alert("PLEASE INPUT ALL FORM FIELDS!");
		} else {
			axios({
				url,
				method: "post",
				headers: {
					Accept: "application.json",
				},
				data: {
					FirstName: firstName,
					LastName: lastName,
					Email: email,
					Subject: subject,
					Message: message,
				},
			}).catch((error) => {
				alert("OOPS! SOMETHING WENT WRONG!");
			});

			navigate("/contact/success");
		}
	};

	return (
		<section className="contact animate__animated animate__zoomIn">
			<h2 className="title">Contact Me</h2>

			<p className="para">
				I am available for any official, freelance and contract works. Do drop
				your message and I will reach back to you almost immediately. Gracias!
				&#128526;
			</p>

			<div className="contact-details">
				<form
					method="POST"
					onSubmit={formSubmitHandler}
					className="form row-flex"
				>
					<div className="form-card">
						<input
							id="first-name"
							name="First Name"
							type="text"
							placeholder="First Name"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<input
							id="last-name"
							name="Last Name"
							type="text"
							placeholder="Last Name"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					<div className="form-card">
						<input
							id="email"
							name="email"
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							id="subject"
							name="subject"
							type="text"
							placeholder="Subject"
							value={subject}
							onChange={(e) => setSubject(e.target.value)}
						/>
					</div>
					<textarea
						id="message"
						name="messsage"
						placeholder="Message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
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
