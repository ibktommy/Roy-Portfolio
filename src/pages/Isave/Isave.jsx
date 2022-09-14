import React from 'react'
import "./Isave.scss";
import Header from './Header'
import Background from './Background'
import Color from './Color'
import DesignSystem from './DesignSystem'
import FileComponents from './FileComponents'
import Statement from './Statement'
import VisualDesign from './VisualDesign'
import Wireframe from './Wireframe'
import Iconography from './Iconography'
import UserFlow from './UserFlow'
import Footer from "../../components/Footer";

const Isave = () => {
  return (
		<section className="isave animate__animated animate__fadeInUp">
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