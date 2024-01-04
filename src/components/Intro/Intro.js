import React from "react";
import bg from "../../assets/ketan.png";
import "./Intro.css";
import { Link } from "react-scroll";

const Intro = () => {
	return (
		<section id="intro">
			<div class="intro-contents">
				<div class="intro-head">
					Hi, I am <br /> Ketan Sharma
				</div>
				<div class="intro-text">Software Developer</div>
				<Link>
					<button type="button" class="button">
						Download CV
					</button>
				</Link>
			</div>
			<div className="image-container">
				<img src={bg} id="ketan-img" />
			</div>
		</section>
	);
};

export default Intro;
