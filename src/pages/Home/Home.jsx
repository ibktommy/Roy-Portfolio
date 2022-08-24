import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import homeData from './HomeData.json'
import HomeCard from '../../components/HomeCard'

const Home = () => {
	return (
		<>
			<header className="row-flex">
				<p>
					<span>Abdulrazzaq Anjorin </span>
					is a Product Design expert who has a high value for promotion of
					information architecture and product development processes whichwhich
					includes: 'Identifying Problems, Analyzing Information and Proferring
					Solutions to ssues that Enhances User Experience'.
					<br /> I specialize in shaping brands and defining product’s user
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
		</>
	);
};

export default Home;
