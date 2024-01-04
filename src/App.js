import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skill from "./components/Skill/Skill";
import Projects from "./components/Projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
	return (
		<>
			<Navbar />
			<Intro />
			<Skill />
			<Projects />
			<Contact />
		</>
	);
}

export default App;
