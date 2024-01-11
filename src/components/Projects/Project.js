import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({ thumbnail, name, description, tech, github_url, redirect_url }) => {
	const containerRef = useRef(null);
	const textRef = useRef(null);

	useEffect(() => {
		const resizeText = () => {
			if (textRef.current) {
				const containerWidth = containerRef.current.offsetWidth;
				const textWidth = textRef.current.offsetWidth;
				// console.log(containerWidth);
				// console.log(textWidth);
				if (textWidth > containerWidth) {
					const fontSize = parseFloat(window.getComputedStyle(textRef.current).fontSize);
					textRef.current.style.fontSize = fontSize - 1 + "px";
					resizeText(textRef.current);
				}
			}
		};

		resizeText();
	});
	return (
		<div className="project-tile">
			<img src={thumbnail} alt={name} />
			<div className="summary">{description}</div>
			<div className="project-info">
				<div className="details" ref={containerRef}>
					<span className="project-title" ref={textRef}>
						{name}
					</span>
					<span className="tech-stack">{tech}</span>
				</div>
				<div className="links">
					<a href={github_url} target="_blank" rel="noreferrer">
						<FontAwesomeIcon className="fa-icon" icon={faGithub} size="xl" />
					</a>
					<a href={redirect_url} target="_blank" rel="noreferrer">
						<FontAwesomeIcon className="fa-icon" icon={faLink} size="lg" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Project;
