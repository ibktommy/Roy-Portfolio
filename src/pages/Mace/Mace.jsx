import React from "react";
import './Mace.scss'
import {
	Header,
	About,
	Color,
	DesignSystem,
	Statement,
	VisualDesign,
	Wireframe,
	Goals,
	UserFlow,
} from "../Mace";
import Footer from "../../components/Footer";

const Mace = () => {
	return (
		<section className="mace">
			<Header />
			<About />
			<Statement />
			<Goals />
			<UserFlow />
			<Wireframe />
			<DesignSystem />
			<Color />
			<VisualDesign />
			<Footer children={"mace"} />
		</section>
	);
};

export default Mace;
