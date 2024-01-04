import React from "react";
import "./Contact.css";

const Contact = () => {
	return (
		<section id="contact">
			<span className="title">Contact Me</span>
			<span className="description">
				Please fill out the form below to discuss any work opportunities!
			</span>
			<form className="contact-form">
				<input type="text" className="name" placeholder="Your Name" />
				<input type="email" className="email" placeholder="Your Email" />
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
					<img src="" alt="" className="link" />
					<img src="" alt="" className="link" />
					<img src="" alt="" className="link" />
				</div>
			</form>
		</section>
	);
};

export default Contact;
