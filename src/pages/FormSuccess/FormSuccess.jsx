import React from "react";
import "./FormSuccess.scss";
import FormImage from "../../images/logo/thanks.gif";

const FormSuccess = () => {
	return (
		<div className="form-success animate__animated animate__zoomInDown">
			<p className="form-text">
				Your Message as been sent, I will respond shortly. Thanks!
			</p>
			<img src={FormImage} alt="formgif" />
		</div>
	);
};

export default FormSuccess;
