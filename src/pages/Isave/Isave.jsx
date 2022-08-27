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

const Isave = () => {
  return (
		<section className="isave">
			<Header />
			<Background />
			<Statement />
			<UserFlow />
			<Wireframe />
			<VisualDesign />
		</section>
	);
}

export default Isave