import bg from "../../assets/ketan.jpg";
import { useTypewriter } from "react-simple-typewriter";
import "./Intro.css";

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

	const { isType, isDelete, isDelay, isDone } = helper;

	return (
		<section id="intro">
			<div class="intro-contents">
				<div class="intro-head">Hi, I am Ketan...</div>
				<div class="intro-text">
					<span>{text}</span>
					<span className={isType || isDelete ? "" : "cursor"}>_</span>
				</div>
				<div className="button-container">
					<button type="button" class="button1">
						Get in Touch
					</button>
					<button type="button" class="button2">
						Download CV
					</button>
				</div>
			</div>
			<div className="image-container">
				<div className="circle">
					<img src={bg} id="ketan-img" />
				</div>
			</div>
		</section>
	);
};

export default Intro;
