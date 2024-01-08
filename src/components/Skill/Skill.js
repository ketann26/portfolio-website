import React from "react";
import "./Skill.css";
import ProgressLine from "./ProgressLine";
import sd from "../../assets/softwaredev.png";
import fs from "../../assets/fullstack.png";
import db from "../../assets/database.png";
import python from "../../assets/python.png";
import cpp from "../../assets/cpp.png";
import django from "../../assets/django.png";
import express from "../../assets/express.png";
import javascript from "../../assets/javascript.png";
import mongodb from "../../assets/mongodb.png";
import reactjs from "../../assets/reactjs.png";
import sql from "../../assets/sql.png";

const Skill = () => {
	const skills = [
		{ label: "Python", level: "80%", icon: python },
		{ label: "C++", level: "90%", icon: cpp },
		{ label: "Django", level: "70%", icon: django },
		{ label: "JavaScript", level: "90%", icon: javascript },
		{ label: "ReactJS", level: "70%", icon: reactjs },
		{ label: "ExpressJS", level: "80%", icon: express },
		{ label: "SQL", level: "75%", icon: sql },
		{ label: "MongoDB", level: "60%", icon: mongodb },
	];

	return (
		<section id="about">
			<span className="title">About</span>
			<span className="description">
				Hi there! 👋 I'm Ketan, an upcoming 2024 graduate from NIT Hamirpur with a deep
				passion for coding. As a problem solver at heart, I thrive on challenges, embracing
				each opportunity as a chance to learn and grow. I'm not just a fast learner; I'm a
				self-learner who enjoys diving into new technologies. Currently on the lookout for
				exciting opportunities to apply my skills and contribute to innovative projects.
				Let's build something amazing together! 💻✨
				<span className="tags">
					#Developer #CodingPassion #UpcomingGraduate #TechEnthusiast
				</span>
			</span>
			<div class="services-container">
				<div class="service">
					<img src={sd} alt="Software Development" />
					<div>Software Development</div>
				</div>
				<div class="service">
					<img src={fs} alt="Full Stack Development" />
					<div>Full Stack Development</div>
				</div>
				<div class="service">
					<img src={db} alt="Data Engineering" />
					<div>Data Engineering</div>
				</div>
			</div>
			<div className="skills-container">
				{skills.map((s) => {
					return (
						<div className="progressBar">
							<ProgressLine
								key={s.label}
								label={s.label}
								icon={s.icon}
								visualParts={[
									{
										percentage: s.level,
										color: "#9a33ff",
									},
								]}
							/>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Skill;
