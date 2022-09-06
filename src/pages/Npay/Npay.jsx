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
		</section>
	);
};

export default Npay;
