import React from "react";
import "./Topmost.scss";
import Header from "./Header";
import About from "./About";
import Statement from "./Statement";
import Goals from "./Goals";
import UsersPersonas from "./UsersPersonas";
import Wireframing from "./Wireframing";
import VirtualDesign from "./VirtualDesign";
import DesignSystem from "./DesignSystem";
import Footer from "../../components/Footer";

const Topmost = () => {
	return (
		<section className="topmost animate__animated animate__fadeInUp">
			<Header />
			<About />
			<Statement />
			<Goals />
			<UsersPersonas />
			<Wireframing />
			<VirtualDesign />
			<DesignSystem />
			<Footer children={"topmost"} />
		</section>
	);
};

export default Topmost;
