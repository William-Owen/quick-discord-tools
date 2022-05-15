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
		const startTime = createDiscordTime(currentTime.unix(), "T")
		const endTime = createDiscordTime(currentTime.add(time, "minutes").unix(), "T")

		const discordMessage = dedent(`
			**:se: CLAIM: ${claimText.toUpperCase()}**
			Street Epidemiologist: **${seName}**
			Conversation Partner: **${cpName}**
			- - -
			:clock1: From: ${startTime} to ${endTime}
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
								Street Epistemologist: <strong>{seName}</strong><br />
								Conversation Partner: <strong>{cpName}</strong><br />
								From: <em>&lt;When message is copied&gt; to {time} min later&gt;</em>

							</CopyTextToClipboard>

						</div>

					</div>


				</div>

			</div>

		</div>

	)

}

export default PageDiscordTime