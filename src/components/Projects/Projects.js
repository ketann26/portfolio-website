import React from "react";
import "./Projects.css";
import webapp from "../../assets/webapp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
	const projectsList = [
		{
			name: "Netflix Clone",
			description:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, numquam eveniet magni necessitatibus id minus temporibus minima sunt dignissimos ducimus!",
			tech: "HTML, CSS, JavaScript",
			github_url: "",
			redirect_url: "",
			thumbnail: webapp,
		},
		{
			name: "Netflix Clone",
			description:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, numquam eveniet magni necessitatibus id minus temporibus minima sunt dignissimos ducimus!",
			tech: "HTML, CSS, JavaScript",
			github_url: "",
			redirect_url: "",
			thumbnail: webapp,
		},
		{
			name: "Netflix Clone",
			description:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, numquam eveniet magni necessitatibus id minus temporibus minima sunt dignissimos ducimus!",
			tech: "HTML, CSS, JavaScript",
			github_url: "",
			redirect_url: "",
			thumbnail: webapp,
		},
		{
			name: "Netflix Clone",
			description:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, numquam eveniet magni necessitatibus id minus temporibus minima sunt dignissimos ducimus!",
			tech: "HTML, CSS, JavaScript",
			github_url: "",
			redirect_url: "",
			thumbnail: webapp,
		},
		{
			name: "Netflix Clone",
			description:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, numquam eveniet magni necessitatibus id minus temporibus minima sunt dignissimos ducimus!",
			tech: "HTML, CSS, JavaScript",
			github_url: "",
			redirect_url: "",
			thumbnail: webapp,
		},
	];
	return (
		<section id="projects">
			<span className="title">Portfolio</span>
			<div class="project-container">
				{projectsList.map((p, index) => {
					return (
						<div key={index} className="project-tile">
							<img src={p.thumbnail} alt={p.name} />
							<div className="summary">{p.description}</div>
							<div className="project-info">
								<div className="details">
									<span className="project-title">{p.name}</span>
									<span className="tech-stack">{p.tech}</span>
								</div>
								<div className="links">
									<a href={p.github_url}>
										<FontAwesomeIcon
											className="fa-icon"
											icon={faGithub}
											size="xl"
										/>
									</a>
									<a href={p.redirect_url}>
										<FontAwesomeIcon
											className="fa-icon"
											icon={faLink}
											size="lg"
										/>
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
