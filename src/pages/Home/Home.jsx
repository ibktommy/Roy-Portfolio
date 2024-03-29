import React from "react";
import "./Home.scss";
import homeData from "./HomeData.json";
import HomeCard from "../../components/HomeCard";
import Resume from "../../pdf/01 - AbdulrazzaqRoy-resume.pdf";
import Footer from "../../components/Footer";

const Home = () => {
	return (
		<section className="home animate__animated animate__fadeInUp">
			<header className="row-flex">
				<p>
					<span>Abdulrazzaq Anjorin </span>
					is a Product Design expert who has a high value for promotion of
					information architecture and product development processes which
					includes:{" "}
					<b>
						"Identifying Problems, Analyzing Information and Proferring
						Solutions to issues that Enhances User Experience".
					</b>{" "}
					I specialize in shaping brands and defining product’s user experience.
				</p>
				<a href={Resume} target="_blank" rel="noreferrer" className="resume">
					view my resume
				</a>
			</header>
			<h2 className="title">Work Experience</h2>
			{homeData.map(({ id, ...props }) => {
				return <HomeCard key={id} {...props} />;
			})}
			<Footer children={"home page"} />
		</section>
	);
};

export default Home;
