import React from "react";
import "./Projects.css";
import webapp from "../../assets/webapp.png";

const Projects = () => {
	const projectsList = [
		{
			name: "Netflix Clone",
			github_url: "",
			redirect_url: "",
			thumbnail: webapp,
		},
		{ name: "Netflix Clone", github_url: "", redirect_url: "", thumbnail: webapp },
		{ name: "Netflix Clone", github_url: "", redirect_url: "", thumbnail: webapp },
		{ name: "Netflix Clone", github_url: "", redirect_url: "", thumbnail: webapp },
		{ name: "Netflix Clone", github_url: "", redirect_url: "", thumbnail: webapp },
	];
	return (
		<section id="projects">
			<span className="title">Portfolio</span>
			<div class="project-container">
				{projectsList.map((p) => {
					return (
						<div
							className="project-tile"
							style={{ backgroundImage: `url(${p.thumbnail})` }}
						>
							<h4>{p.name}</h4>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
