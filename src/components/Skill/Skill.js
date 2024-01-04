import React from "react";
import "./Skill.css";
import ProgressLine from "./ProgressLine";
import sd from "../../assets/softwaredev.png";
import fs from "../../assets/fullstack.png";
import db from "../../assets/database.png";

const Skill = () => {
	const skills = [
		{ label: "Python", level: "80%" },
		{ label: "C++", level: "90%" },
		{ label: "Django", level: "70%" },
		{ label: "JavaScript", level: "90%" },
		{ label: "ReactJS", level: "70%" },
		{ label: "ExpressJS", level: "80%" },
		{ label: "SQL", level: "75%" },
		{ label: "MongoDB", level: "60%" },
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
						<div>
							<ProgressLine
								key={s.label}
								label={s.label}
								visualParts={[
									{
										percentage: s.level,
										color: "#27AE60",
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
