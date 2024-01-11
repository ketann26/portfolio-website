import { React } from "react";
import "./Projects.css";
import webapp from "../../assets/webapp.png";
import book_recommender from "../../assets/book_recommender.jpg";
import movieflix from "../../assets/movieflix.jpg";
import movie_recommender from "../../assets/movie_recommender.jpg";
import portfolio from "../../assets/portfolio.jpg";

import Project from "./Project";

const Projects = () => {
	const projectsList = [
		{
			name: "MovieFlix",
			description:
				"Netflix homepage clone crafted with React and TMDB API. Bringing cinematic vibes to your screen with simplicity and functionality.",
			tech: "ReactJS, CSS, Axios",
			github_url: "https://github.com/ketann26/movieflix",
			redirect_url: "https://movieflix2024.netlify.app/",
			thumbnail: movieflix,
		},
		{
			name: "Book Recommender",
			description:
				"Unlock tailored book suggestions! My project, using Collaborative Filtering and K-Nearest Neighbours, delivers top 5 reading recommendations effortlessly.",
			tech: "Python, Numpy, Pandas, Flask",
			github_url: "https://github.com/ketann26/Book-Recommendation-System",
			redirect_url: "http://ec2-13-201-138-197.ap-south-1.compute.amazonaws.com:8080/",
			thumbnail: book_recommender,
		},
		{
			name: "Movie Recommender",
			description:
				"Unleash personalized movie magic! My unsupervised learning project recommends your top 5 films using Content-Based Filtering and Word Vectors cosine distances. Powered by TMDB data, streamlined with a sleek Streamlit front-end.",
			tech: "Python, Pandas, Streamlit",
			github_url: "https://github.com/ketann26/Movie-Recommendation-System",
			redirect_url: "https://movie-recommendation-system-2024.streamlit.app/",
			thumbnail: movie_recommender,
		},
		// {
		// 	name: "Online Poker",
		// 	description:
		// 		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, numquam eveniet magni necessitatibus id minus temporibus minima sunt dignissimos ducimus!",
		// 	tech: "HTML, CSS, JavaScript",
		// 	github_url: "",
		// 	redirect_url: "",
		// 	thumbnail: webapp,
		// },
		{
			name: "Portfolio Website",
			description:
				"Dynamic ReactJS Web App showcasing my projects and passion. Responsive, innovative, and visually captivating—explore my world through code and design.",
			tech: "ReactJS, CSS",
			github_url: "https://github.com/ketann26/portfolio-website",
			redirect_url: "https://ketan-portfolio-2024.netlify.app",
			thumbnail: portfolio,
		},
	];

	return (
		<section id="projects">
			<span className="title">Portfolio</span>
			<div class="project-container">
				{projectsList.map((p, index) => {
					return (
						<Project
							key={index}
							thumbnail={p.thumbnail}
							name={p.name}
							description={p.description}
							tech={p.tech}
							github_url={p.github_url}
							redirect_url={p.redirect_url}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
