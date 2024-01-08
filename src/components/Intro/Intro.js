import bg from "../../assets/ketan.jpg";
import { useTypewriter } from "react-simple-typewriter";
import "./Intro.css";
import { Link } from "react-scroll";

const Intro = () => {
	const [text, helper] = useTypewriter({
		words: [
			"Visionary Coder",
			"Full Stack Developer",
			"Problem Solver",
			"Tech Enthusiast",
			"Continuous Learner",
			"Innovation Admirer",
		],
		loop: {},
		typeSpeed: 100,
		deleteSpeed: 50,
		delaySpeed: 2000,
	});

	const { isType, isDelete } = helper;

	return (
		<section id="intro">
			<div class="intro-contents">
				<div class="intro-head">Hi, I am Ketan...</div>
				<div class="intro-text">
					<span>{text}</span>
					<span className={isType || isDelete ? "" : "cursor"}>_</span>
				</div>
				<div className="button-container">
					<Link to="contact" smooth={true} duration={500} className="button1">
						Get in Touch
					</Link>
					<a
						href="https://drive.google.com/file/d/15Z6TdyVx5nYqrUqA7yikRzRN4gNGVs_K/view?usp=sharing"
						target="_blank"
						rel="noreferrer"
						className="button2"
					>
						Download CV
					</a>
				</div>
			</div>
			<div className="image-container">
				<div className="circle">
					<img src={bg} id="ketan-img" alt="Ketan" />
				</div>
			</div>
		</section>
	);
};

export default Intro;
