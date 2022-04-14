
import style from "./App.module.sass"
import { Routes, Route, Link } from "react-router-dom"
import PageDiscordTime from "../../pages/PageDiscordTime"

function App() {

	return (
		<div className={style.App}>

			<nav>
				<Link to="/discord-time">Discord Time</Link>
				<Link to="/">Home</Link>
			</nav>

			<main>
				<Routes>
					<Route path="/" element={<h1>Home</h1>} />
					<Route path="/discord-time" element={<PageDiscordTime/>} />
				</Routes>
			</main>

		</div>
	)

}

export default App
