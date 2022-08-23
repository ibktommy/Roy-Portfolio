import React from 'react'
import "./Maclassics.scss";

const Maclassics = () => {
	return (
		<section className="maclassics">
			<header className="project-header">
				Maclassics is a cake and confectionaries company that makes and sells
				cakes to customers. I created the brand design and shaped user
				experience for Maclassics app.
			</header>

			<div className="gen-details flex">
				<div className="gen-details-left row-flex">
					<div className="gen-details-left_role">
						<h4>My Role</h4>
						<p>Product designer, User research, prototyping.</p>
					</div>
					<div className="gen-details-left_period">
						<h4>Duration</h4>
						<p>Oct 2021- Jan 2022</p>
					</div>
				</div>

				<div className="gen-details-right">
					<div className="gen-details-right_impact">
						<h4>Impact</h4>
						<p>
							There has been a wide use of the maclassic app by customers to
							place orders. The upload and customize function has made the app a
							first choice for many users. The use of design system and user
							flow process reduced production time by the development team.
							Maclassic cakes have seen a steady increase in sales revenue with
							the app accounting for over 40% of sales since its launch.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Maclassics