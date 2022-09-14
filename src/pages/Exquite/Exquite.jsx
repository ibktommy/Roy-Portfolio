import React from "react";
import './Exquite.scss'
import Header from "./Header";
import About from "./About";
import Statement from "./Statement";
import Goals from "./Goals";
import UserFlow from "./UserFlow";
import Wireframe from "./Wireframe";
import VisualDesign from "./VisualDesign";
import Footer from "../../components/Footer";

const Exquite = () => {
	return (
		<section className="exquite animate__animated animate__fadeInUp">
			<Header />
			<About />
			<Statement />
			<Goals />
			<UserFlow />
			<Wireframe />
			<VisualDesign />
			<Footer children={"exquite autos"} />
		</section>
	);
};

export default Exquite;
