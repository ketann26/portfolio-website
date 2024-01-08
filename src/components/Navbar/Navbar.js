import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
						offset={-10}
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

				<FontAwesomeIcon
					icon={faBars}
					size="2xl"
					className="mob-menu-icon"
					onClick={() => setShowMenu(!showMenu)}
				/>
			</nav>
			<div className="mob-menu" style={{ display: showMenu ? "flex" : "none" }}>
				<Link
					activeClass="active"
					to="intro"
					smooth={true}
					offset={-100}
					duration={500}
					className="mob-link"
					onClick={() => setShowMenu(false)}
				>
					Home
				</Link>
				<Link
					activeClass="active"
					to="about"
					smooth={true}
					offset={-50}
					duration={500}
					className="mob-link"
					onClick={() => setShowMenu(false)}
				>
					About
				</Link>
				<Link
					activeClass="active"
					to="projects"
					smooth={true}
					offset={-10}
					duration={500}
					className="mob-link"
					onClick={() => setShowMenu(false)}
				>
					Portfolio
				</Link>
				<Link
					activeClass="active"
					to="contact"
					smooth={true}
					duration={500}
					className="mob-link"
					onClick={() => setShowMenu(false)}
				>
					Contact
				</Link>
			</div>
		</>
	);
};

export default Navbar;
