
import "./App.css"
import { Routes, Route, Link } from "react-router-dom"

function App() {

	return (
		<div className="App">
			<nav>
				<Link to="/about">About</Link>
				<Link to="/">Home</Link>
			</nav>
			<main>
				<Routes>
					<Route path="/" element={<h1>Home</h1>} />
					<Route path="about" element={<h1>About</h1>} />
				</Routes>
			</main>

		</div>
	)

}

export default App
