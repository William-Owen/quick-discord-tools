import { FC, useState } from "react"
import style from "./PageDVRDiscussion.module.sass"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import CopyTextToClipboard from "../../components/CopyTextToClipboard"
import FieldInputText from "../../components/FieldInputText"

dayjs.extend(utc)

const getNextSaturday = () => {

	const now = dayjs() // Get the current date and time using Day.js
	let nextSaturday = dayjs().utc() // Create a new Day.js object with UTC time

	// Set the time to Saturday at 18:00 GMT
	nextSaturday = nextSaturday.day(6).hour(18).minute(0).second(0).millisecond(0)

	// If the current day is after Saturday, set the next Saturday
	if (now.day() >= 6) {

		nextSaturday = nextSaturday.add(7, "day")

	}

	return nextSaturday.toDate() // Convert the Day.js object to a Date object and return it

}

const PageDVRDiscussion: FC = () => {

	const [topicText, setTopicText] = useState("")
	const [descriptionText, setDescriptionText] = useState("")

	function dedent(str:string) {

		str = str.replace(/^\n/, "")
		const match = str.match(/^\s+/)
		return match ? str.replace(new RegExp("^"+match[0], "gm"), "") : str

	}

	const makeDiscordMessage = () => {

		const nextSaturday = getNextSaturday()
		const discordTimeStamp = Math.floor(new Date(nextSaturday).getTime() / 1000)

		const discordMessage = dedent(`
			<@&996345507641298985>
			**${topicText.toUpperCase()}**
			<t:${discordTimeStamp}:F> (<t:${discordTimeStamp}:R>) your time.

			${descriptionText}

			**ABOUT THESE EVENTS**
			These events are open to everyone, but if you haven't attended one for awhile or have never attended one before please take a look at the following channel <#1015913582174679071>

			**MANAGE YOU NOTIFICATIONS VIA SERVER ROLES**
			We use self-asignable roles to keep you notified only of the things you are interested in on the server. They can be managed here <#996347166756978738>
		`)

		return discordMessage

	}

	return (

		<div data-testid="Page-PageDiscordTime" className={style.PageSEPracticeTools}>

			<h1>Conversation Details</h1>

			<div className={style.Layout}>

				<div className={style.layoutDetails}>

					<FieldInputText onChange={(value)=>setTopicText(value)} label="Topic" />
					<FieldInputText rows={4} type="textarea" onChange={(value)=>setDescriptionText(value)} label="Description" />

				</div>

				<div className={style.layoutOutput}>

					<div className={style.cardContainer}>

						<div className={style.childCard}>

							<CopyTextToClipboard clickToCopyText="Click to copy discord code" textToCopy={makeDiscordMessage}>

								<pre>
									{makeDiscordMessage()}
								</pre>

							</CopyTextToClipboard>

						</div>

					</div>


				</div>

			</div>

		</div>

	)

}

export default PageDVRDiscussion