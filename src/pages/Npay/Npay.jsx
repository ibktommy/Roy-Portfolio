import React from "react";
import "./Npay.scss";
import Header from './Header'
import Background from './Background'
import Color from './Color'
import Design from './Design'
import Goals from './Goals'
import Statement from './Statement'
import UserFlow from './UserFlow'
import VisualDesign from './VisualDesign'
import Wireframe from './Wireframe'
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
