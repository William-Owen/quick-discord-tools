import { useState } from "react"
import FieldInputDate from "../../components/FieldInputDate"
import FieldInputTime from "../../components/FieldInputTime"
import style from "./PageSEPracticeTools.module.sass"
// import moment from "moment"
import moment from "moment-timezone"
import CopyTextToClipboard from "../../components/CopyTextToClipboard"
import FieldInputText from "../../components/FieldInputText"
import { createDiscordTime } from "../../modules/createDiscordTime"

const PageDiscordTime: React.FC = () => {

	const [claimText, setClaimText] = useState("")
	const [seName, setSeName] = useState("")
	const [cpName, setCpName] = useState("")
	const [time, setTime] = useState("")

	const discordMessage = `
	**CLAIM: ${claimText}**
	Street Epistemologist: **${seName}**
	Conversation Partner: **${cpName}**
	Starting at: <When Message is created>
	Ending at: <${time} min from when Message is created>`

	const makeDiscordMessage = () => {

		const startTime = createDiscordTime(moment().add(time, "minutes").unix(), "T")
		const endTime = createDiscordTime(moment().unix(), "T")

		const discordMessage = `
		**CLAIM: ${claimText}**
		Street Epistemologist: **${seName}**
		Conversation Partner: **${cpName}**
		Starting at: ${startTime}
		Ending at: ${endTime}`

	}

	return (

		<div data-testid="Page-PageDiscordTime" className={style.PageDiscordTime}>

			<h1>Conversation Participants</h1>

			<div className={style.timeControls}>

				<FieldInputText onChange={(value)=>setClaimText(value)} label="Claim" />
				<FieldInputText onChange={(value)=>setSeName(value)} label="Street Epistemologist" />
				<FieldInputText onChange={(value)=>setCpName(value)} label="IL/Conversation Partner" />
				<FieldInputText type="number" value="25" onChange={(value)=>setTime(value)} label="Time" />

			</div>

			<div className={style.displayGrid}>

				{discordMessage &&

					<>

						<div className={style.cardContainer}>

							<div className={style.childCard}>

								<CopyTextToClipboard clickToCopyText="Click to copy discord code" textToCopy={makeDiscordMessage}>
									<pre>{discordMessage}</pre>
								</CopyTextToClipboard>

							</div>

						</div>

					</>

				}

			</div>

		</div>

	)

}

export default PageDiscordTime