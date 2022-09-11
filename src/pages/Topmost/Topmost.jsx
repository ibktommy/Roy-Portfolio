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

const Topmost = () => {
	return (
		<section className="topmost">
			<Header />
			<About />
			<Statement />
			<Goals />
			<UsersPersonas />
			<Wireframing />
			<VirtualDesign />
			<DesignSystem />
		</section>
	);
};

export default Topmost;
