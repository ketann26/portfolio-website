import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<>
			<nav className="navbar">
				<div className="logo">ks</div>
				<div className="nav-menu">
					<Link
						activeClass="active"
						to="intro"
						smooth={true}
						offset={-100}
						duration={500}
						className="nav-link"
					>
						Home
					</Link>
					<Link
						activeClass="active"
						to="about"
						smooth={true}
						offset={-50}
						duration={500}
						className="nav-link"
					>
						About
					</Link>
					<Link
						activeClass="active"
						to="projects"
						smooth={true}
						offset={20}
						duration={500}
						className="nav-link"
					>
						Portfolio
					</Link>
					<Link
						activeClass="active"
						to="contact"
						smooth={true}
						duration={500}
						className="nav-link"
					>
						Contact
					</Link>
				</div>

				<div
					id="mob-menu-icon"
					onClick={() => {
						setShowMenu(!showMenu);
					}}
					className={showMenu ? "open" : ""}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</nav>
			<div className="mob-menu" style={{ display: showMenu ? "flex" : "none" }}>
				<Link
					activeClass="active"
					to="intro"
					smooth={true}
					offset={-100}
					duration={500}
					onClick={() => setShowMenu(false)}
					style={{ width: "100%" }}
				>
					<div className="mob-link">Home</div>
				</Link>
				<Link
					activeClass="active"
					to="about"
					smooth={true}
					offset={-50}
					duration={500}
					onClick={() => setShowMenu(false)}
					style={{ width: "100%" }}
				>
					<div className="mob-link">About</div>
				</Link>
				<Link
					activeClass="active"
					to="projects"
					smooth={true}
					offset={-10}
					duration={500}
					onClick={() => setShowMenu(false)}
					style={{ width: "100%" }}
				>
					<div className="mob-link">Portfolio</div>
				</Link>
				<Link
					activeClass="active"
					to="contact"
					smooth={true}
					duration={500}
					onClick={() => setShowMenu(false)}
					style={{ width: "100%" }}
				>
					<div className="mob-link">Contact</div>
				</Link>
			</div>
		</>
	);
};

export default Navbar;
