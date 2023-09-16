import { FC, useState } from "react"
import style from "./PageDVRDiscussion.module.sass"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import CopyTextToClipboard from "../../components/CopyTextToClipboard"
import FieldInputText from "../../components/FieldInputText"
import moment from "moment-timezone"
import FieldInputDate from "../../components/FieldInputDate"
import FieldInputTime from "../../components/FieldInputTime"

dayjs.extend(utc)

const PageDVRDiscussion: FC = () => {

	const [topicText, setTopicText] = useState("")
	const [descriptionText, setDescriptionText] = useState("")

	const newDate = new Date()
	newDate.setDate(newDate.getDate() + (7 + 6 - newDate.getDay()) % 7)
	newDate.setHours(19)
	newDate.setMinutes(0)
	newDate.setSeconds(0)

	const [currentDate, setCurrentDate] = useState<Date>(newDate)
	const [currentTime, setCurrentTime] = useState<string>("19:00")
	const [currentDateTime, setCurrentDateTime] = useState<Date>(newDate)

	function dedent(str: string) {

		str = str.replace(/^\n/, "")
		const match = str.match(/^\s+/)
		return match ? str.replace(new RegExp("^" + match[0], "gm"), "") : str

	}

	const makeDiscordMessage = () => {

		const discordTimeStamp = Math.floor(new Date(currentDateTime).getTime() / 1000)

		const discordMessage = dedent(`
			<@&996345507641298985>
			**${topicText.toUpperCase()}**
			<t:${discordTimeStamp}:F> (<t:${discordTimeStamp}:R>) your time.

			${descriptionText}

			**ABOUT THESE EVENTS**
			These events are open to everyone, but if you haven't attended one for awhile or have never attended one before please take a look at the **'Server Guide'** at the top of the channel list.

			**MANAGE YOU NOTIFICATIONS VIA SERVER ROLES**
			We use self-assignable roles to keep you notified only of the things you are interested in on the server. They can be managed via the new **'Channels & Roles'** section at the top of the channel list.

			**SUGGEST FUTURE TOPICS**
			If you have an idea for a topic, please feel free to add it to the discussion topics forum. Make sure that your topic is clearly worded and designed to prompt a discussion. https://discord.com/channels/106672499395149824/1112991571743342613

		`)

		return discordMessage

	}

	const handleDateTimeChange = (newTime: string, newDate: Date) => {

		const newDateTime = moment(newDate).hour(parseInt(newTime.split(":")[0])).minute(parseInt(newTime.split(":")[1])).toDate()
		setCurrentDateTime(newDateTime)

	}

	const handleTimeChange = (time: string) => {

		setCurrentTime(time)
		handleDateTimeChange(time, currentDate)

	}

	const handleDateChange = (date: Date) => {

		setCurrentDate(date)
		handleDateTimeChange(currentTime, date)

	}

	return (
		<div
			data-testid="Page-PageDiscordTime"
			className={style.deviantDiscussionPage}>

			<h1>Conversation Details</h1>

			<div className={style.Layout}>

				<div className={style.layoutDetails}>

					<FieldInputText
						onChange={(value) => setTopicText(value)}
						label="Topic"/>
					<FieldInputText
						rows={4}
						type="textarea"
						onChange={(value) => setDescriptionText(value)}
						label="Description"/>

					<div>

						<details>

							<summary>Advanced date</summary>

							<FieldInputDate selectNextWeekday={6} onChange={handleDateChange} />

							<FieldInputTime hour={19} minute={0} onChange={handleTimeChange} />

						</details>

					</div>

				</div>

				<div className={style.layoutOutput}>

					<p>{moment(new Date(currentDateTime)).format("dddd, MMMM D YYYY h:mm A")} ({moment(new Date(currentDateTime)).fromNow()}) your time.</p>

					<div className={style.cardContainer}>
						<div className={style.childCard}>
							<CopyTextToClipboard
								clickToCopyText="Click to copy discord code"
								textToCopy={makeDiscordMessage}>
								<pre>{makeDiscordMessage()}</pre>
							</CopyTextToClipboard>
						</div>
					</div>
				</div>

			</div>

		</div>
	)

}

export default PageDVRDiscussion
