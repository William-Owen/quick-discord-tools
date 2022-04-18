
import style from "./App.module.sass"
import { Routes, Route, Link } from "react-router-dom"
import PageDiscordTime from "../../pages/PageDiscordTime"
import PageMultipleDiscordTime from "../../pages/PageMultipleDiscordTime"

function App() {

	return (
		<div className={style.App}>

			<nav>
				<Link to="/discord-time">Discord Time</Link>
				<Link to="/discord-time-poll">Discord Time Poll</Link>
				<Link to="/">Home</Link>
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
				</Routes>
			</main>

		</div>
	)

}

export default App
