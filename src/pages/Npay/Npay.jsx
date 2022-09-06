import React from "react";
import "./Npay.scss";

import {
	Header,
	Background,
	Color,
	Design,
	Goals,
	Statement,
	UserFlow,
	VisualDesign,
	Wireframe,
} from "../Npay";
import Footer from "../../components/Footer";

const Npay = () => {
	return (
		<section className="npay">
			<Header />
			<Background />
			<Statement />
			<Goals />
			<Design />
			<UserFlow />
			<Wireframe />
			<Color />
			<VisualDesign />
			<Footer children={"Npay"} />
		</section>
	);
};

export default Npay;
