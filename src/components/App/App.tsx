
import style from "./App.module.sass"
import { Routes, Route, Link } from "react-router-dom"
import PageDiscordTime from "../../pages/PageDiscordTime"
import PageMultipleDiscordTime from "../../pages/PageMultipleDiscordTime"
import PageSEPracticeTools from "../../pages/PageSEPracticeTools"

function App() {

	return (
		<div className={style.App}>

			<nav>
				<Link to="/">Home</Link>
				<Link to="/discord-time">Discord Time</Link>
				<Link to="/discord-time-poll">Discord Time Poll</Link>
				<Link to="/se-practice">SE Practice</Link>
			</nav>

			<main>

				<Routes>
					<Route path="/" element={
						<>
							<h1>Home</h1>
							<p>A small collection of tools for helping do various things on discord. To be added to as we go along.</p>
						</>
					} />
					<Route path="/discord-time" element={<PageDiscordTime/>} />
					<Route path="/discord-time-poll" element={<PageMultipleDiscordTime/>} />
					<Route path="/se-practice" element={<PageSEPracticeTools />} />

				</Routes>

				<footer>

					<p>Created by William Owen - <a href="https://github.com/William-Owen/quick-discord-tools">Code on GitHub</a> - Checkout <a href="https://deviantrobot.com/">deviantrobot.com</a> and <a href="https://www.youtube.com/c/inspirereflection">Inspire Reflection</a></p>

				</footer>

			</main>

		</div>
	)

}

export default App
