import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

const Contact = () => {
	const form = useRef();
	const [isSubmitted, setIsSubmitted] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_ps58psr", "template_h7455ac", form.current, "PS7PM0JgXWIgvJI53")
			.then(
				(res) => {
					console.log(res.text);
				},
				(err) => {
					console.log(err.text);
				}
			);
	};

	return (
		<section id="contact">
			<span className="title">Contact Me</span>
			<span className="description">
				{isSubmitted
					? "Thank you for your response! I'll get in touch with you soon."
					: "Please fill out the form below to discuss any work opportunities!"}
			</span>
			<form
				className="contact-form"
				ref={form}
				onSubmit={(e) => {
					e.preventDefault();
					e.target.reset();
					setIsSubmitted(true);
				}}
			>
				<input type="text" className="name" placeholder="Your Name" name="from_name" />
				<input type="email" className="email" placeholder="Your Email" name="from_email" />
				<textarea
					name="message"
					rows="5"
					className="message"
					placeholder="Your Message"
				></textarea>
				<button type="submit" value="Submit" className="submit-btn">
					Submit
				</button>
				<div className="social-links">
					<a
						href="https://www.linkedin.com/in/ketan-sharma-3487891ab/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon className="fa-icon" icon={faLinkedin} size="2xl" />
					</a>
					<a href="" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon className="fa-icon" icon={faXTwitter} size="2xl" />
					</a>
					<a href="https://github.com/ketann26" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon className="fa-icon" icon={faGithub} size="2xl" />
					</a>
				</div>
			</form>
		</section>
	);
};

export default Contact;
