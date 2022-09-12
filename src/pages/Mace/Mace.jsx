import React from "react";
import './Mace.scss'
import Header from './Header'
import About from './About'
import Color from './Color'
import DesignSystem from './DesignSystem'
import Statement from './Statement'
import VisualDesign from './VisualDesign'
import Wireframe from './Wireframe'
import Goals from './Goals'
import UserFlow from './UserFlow'
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
