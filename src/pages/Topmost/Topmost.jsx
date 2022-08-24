import React from "react";
import "./Topmost.scss";
import Header from "./Header";
import About from "./About";
import Statement from "./Statement";
import Goals from "./Goals";

const Topmost = () => {
	return (
		<section className="topmost">
			<Header />
			<About />
			<Statement />
			<Goals />
		</section>
	);
};

export default Topmost;
