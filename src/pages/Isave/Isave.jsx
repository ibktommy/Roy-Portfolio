import React from 'react'
import "./Isave.scss";
import {
	Header,
	Background,
	Color,
	DesignSystem,
	FileComponents,
	Statement,
	VisualDesign,
	Wireframe,
	Iconography,
	UserFlow,
} from "../Isave";
import Footer from "../../components/Footer";

const Isave = () => {
  return (
		<section className="isave">
			<Header />
			<Background />
			<Statement />
			<UserFlow />
			<Wireframe />
			<VisualDesign />
			<DesignSystem />
			<Color />
			<Iconography />
			<FileComponents />
			<Footer children={"isave"} />
		</section>
	);
}

export default Isave