import { useState } from "react"
import FieldInputDate from "../../components/FieldInputDate"
import FieldInputTime from "../../components/FieldInputTime"
import style from "./PageDiscordTime.module.sass"
// import moment from "moment"
import moment from "moment-timezone"
import CopyTextToClipboard from "../../components/CopyTextToClipboard"
import SelectTimezone from "../../components/SelectTimezone"

const PageDiscordTime: React.FC = () => {

	const [currentDate, setCurrentDate] = useState<Date>(new Date())
	const [currentTime, setCurrentTime] = useState<string>("00:00")
	const [currentDateTime, setCurrentDateTime] = useState<Date>(moment().toDate())
	const [currentDisplayTimes, setCurrentDisplayTimes] = useState([
		["Europe (London)", "Europe/London"],
		["Europe (Berlin)", "Europe/Berlin"],
		["Japan (Tokyo)", "Japan"],
		["Australia (Melbourne)", "Australia/Melbourne"],
		["America (New York)", "America/New_York"],
		["America (Los Angeles)", "America/Los_Angeles"],
	])

	const handleDateTimeChange = (newTime: string, newDate: Date) => {

		const newDateTime = moment(newDate).hour(parseInt(newTime.split(":")[0])).minute(parseInt(newTime.split(":")[1])).toDate()
		setCurrentDateTime(newDateTime)
		console.log(`\nThis event will start ${moment(newDateTime).format("dddd, MMMM D, YYYY [at] HH:mm")} (${moment(newDateTime).fromNow()})\n<t:${Math.floor(new Date(newDateTime).getTime() / 1000)}:F> (<t:${Math.floor(new Date(newDateTime).getTime() / 1000)}:R>) your time.`)

	}

	const handleTimeChange = (time: string) => {

		setCurrentTime(time)
		handleDateTimeChange(time, currentDate)

	}

	const handleNewTimeZone = (timeZone: string) => {

		setCurrentDisplayTimes ([
			... currentDisplayTimes,
			[timeZone, timeZone]
		])

	}

	const handleDateChange = (date: Date) => {

		setCurrentDate(date)
		handleDateTimeChange(currentTime, date)

	}

	const discordTimeStamp = Math.floor(new Date(currentDateTime).getTime() / 1000)
	const selectedTimeString = String(currentTime).split(":")[0].padStart(2, "0") + ":" + String(currentTime).split(":")[1].padStart(2, "0")

	return (

		<div data-testid="Page-PageDiscordTime" className={style.PageDiscordTime}>

			<h1>Discord Time</h1>

			<div className={style.timeControls}>

				<FieldInputDate onChange={(date)=>handleDateChange(date)} />
				<FieldInputTime onChange={(time)=>handleTimeChange(time)} />

			</div>

			<div className={style.displayGrid}>

				{currentDateTime &&

					<>

						<div className={style.cardContainer}>

							<h2>Timezone Awareness</h2>

							<SelectTimezone onSelect={handleNewTimeZone} />

							<p><strong>{selectedTimeString}</strong> Local time is: </p>

							<ul className={style.timezoneList}>

								{currentDisplayTimes.map(labelTimeZoneArray=>{

									const time = moment.tz(currentDateTime, labelTimeZoneArray[1]).format("HH:mm")
									return <li key={labelTimeZoneArray[1]}><span>{time}</span> <strong>{labelTimeZoneArray[0]}</strong>.</li>

								})}

							</ul>

						</div>

						<div className={style.cardContainer}>

							<div className={style.childCard}>

								<h3>Time Only</h3>

								<CopyTextToClipboard clickToCopyText="Click to copy discord code" textToCopy={`<t:${Math.floor(new Date(currentDateTime).getTime() / 1000)}:t>`}>
									<>{`<t:${Math.floor(new Date(currentDateTime).getTime() / 1000)}:t>`}</>
								</CopyTextToClipboard>

							</div>

							<div className={style.childCard}>

								<h3>Full Timestamp</h3>

								<CopyTextToClipboard clickToCopyText="Click to copy discord code" textToCopy={`<t:${Math.floor(new Date(currentDateTime).getTime() / 1000)}:F>`}>
									<>{`<t:${Math.floor(new Date(currentDateTime).getTime() / 1000)}:F>`}</>
								</CopyTextToClipboard>

							</div>

							<div className={style.childCard}>

								<h3>Descriptive Timestamp</h3>

								<CopyTextToClipboard clickToCopyText="Click to copy discord code" textToCopy={`<t:${discordTimeStamp}:F> (<t:${discordTimeStamp}:R>) your time.`}>
									<>{`<t:${discordTimeStamp}:F> (<t:${discordTimeStamp}:R>) your time.`}</>
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