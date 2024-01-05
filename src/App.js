import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skill from "./components/Skill/Skill";
import Projects from "./components/Projects/Projects";
import Contact from "./components/contact/Contact";
import "./App.css";

function App() {
	return (
		<>
			<Navbar />
			<Intro />
			<Skill />
			<Projects />
			<Contact />
			<div className="footer">Copyright &#169; 2024 Ketan Sharma. All Rights Reserved</div>
		</>
	);
}

export default App;
