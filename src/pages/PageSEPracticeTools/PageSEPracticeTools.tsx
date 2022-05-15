import { useState } from "react"
import style from "./PageSEPracticeTools.module.sass"
import moment from "moment-timezone"
import CopyTextToClipboard from "../../components/CopyTextToClipboard"
import FieldInputText from "../../components/FieldInputText"
import { createDiscordTime } from "../../modules/createDiscordTime"

const PageDiscordTime: React.FC = () => {

	const [claimText, setClaimText] = useState("")
	const [seName, setSeName] = useState("")
	const [cpName, setCpName] = useState("")
	const [time, setTime] = useState(25)

	function dedent(str:string) {

		str = str.replace(/^\n/, "")
		const match = str.match(/^\s+/)
		return match ? str.replace(new RegExp("^"+match[0], "gm"), "") : str

	}

	const makeDiscordMessage = () => {

		const currentTime = moment(new Date())
		const currentEndTime = moment(new Date()).add(time, "minutes")

		const startTime = createDiscordTime(currentTime.unix(), "T")
		const endTime = createDiscordTime(currentEndTime.unix(), "T")
		const relativeTime = createDiscordTime(currentEndTime.unix(), "R")

		const discordMessage = dedent(`
			- - - - -
			**:se: CLAIM**: ${claimText.toUpperCase()}
			**${time}** min Session from ${startTime} to ${endTime} ends ${relativeTime}
			Street Epidemiologist: **${seName}**
			Conversation Partner: **${cpName}**
			- - - - -
		`)

		return discordMessage

	}

	return (

		<div data-testid="Page-PageDiscordTime" className={style.PageSEPracticeTools}>

			<h1>Conversation Details</h1>

			<div className={style.Layout}>

				<div className={style.sessionDetails}>

					<FieldInputText onChange={(value)=>setClaimText(value)} label="Claim" />
					<FieldInputText onChange={(value)=>setSeName(value)} label="Street Epistemologist" />
					<FieldInputText onChange={(value)=>setCpName(value)} label="IL/Conversation Partner" />
					<FieldInputText type="number" value="25" onChange={(value)=>setTime(parseInt(value))} label="Time" />

				</div>

				<div>

					<div className={style.cardContainer}>

						<div className={style.childCard}>

							<CopyTextToClipboard clickToCopyText="Click to copy discord code" textToCopy={makeDiscordMessage}>

								<strong>CLAIM:</strong> {claimText.toUpperCase()}<br />
								<strong>{time}</strong> min Session from <em>&lt;When message is copied&gt; to {time} min later&gt;</em> ends &lt;Relative time&gt;<br />
								Street Epistemologist: <strong>{seName}</strong><br />
								Conversation Partner: <strong>{cpName}</strong><br />

							</CopyTextToClipboard>

						</div>

					</div>


				</div>

			</div>

		</div>

	)

}

export default PageDiscordTime