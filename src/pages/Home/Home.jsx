import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import homeData from './HomeData.json'
import HomeCard from '../../components/HomeCard'
import Footer from "../../components/Footer";

const Home = () => {
	return (
		<>
			<header className="row-flex">
				<p>
					<span>Abdulrazzaq Anjorin </span>
					is a Product Design expert who has a high value for promotion of
					information architecture and product development processes which
					includes:{" "}
					<em>
						<b>
							"Identifying Problems, Analyzing Information and Proferring
							Solutions to issues that Enhances User Experience".
						</b>
					</em>{" "}
					{"  "}I specialize in shaping brands and defining product’s user
					experience.
				</p>
				<Link to="/" className="resume">
					View my resume
				</Link>
			</header>

			<h2 className="title">Work Experience</h2>

			{homeData.map(({ id, ...props }) => {
				return <HomeCard key={id} {...props} />;
			})}

			<Footer children={"home page"} />
		</>
	);
};

export default Home;
