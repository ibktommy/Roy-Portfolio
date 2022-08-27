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
		</section>
	);
}

export default Isave