import React from "react";
import './Exquite.scss'
import {
	Header,
	About,
	Statement,
	Goals,
	UserFlow,
	Wireframe,
	VisualDesign,
} from "../Exquite";
import Footer from "../../components/Footer";

const Exquite = () => {
	return (
		<section className="exquite">
			<Header />
			<Footer children={"exquite autos"} />
		</section>
	);
};

export default Exquite;
