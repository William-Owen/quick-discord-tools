import { useState } from "react"
import FieldInputDate from "../../components/FieldInputDate"
import FieldInputTime from "../../components/FieldInputTime"
import style from "./PageDiscordTime.module.sass"
import moment from "moment"
import CopyTextToClipboard from "../../components/CopyTextToClipboard"

const PageDiscordTime: React.FC = () => {

	const [currentDate, setCurrentDate] = useState<Date>(new Date())
	const [currentTime, setCurrentTime] = useState<string>("00:00")
	const [currentDateTime, setCurrentDateTime] = useState<Date>(moment().toDate())

	const timesArray = []

	const handleDateTimeChange = (newTime: string, newDate: Date) => {

		const newDateTime = moment(newDate).hour(parseInt(newTime.split(":")[0])).minute(parseInt(newTime.split(":")[1])).toDate()
		setCurrentDateTime(newDateTime)
		console.log(`\nThis event will start ${moment(newDateTime).format("dddd, MMMM D, YYYY [at] HH:mm")} (${moment(newDateTime).fromNow()})\n<t:${Math.floor(new Date(newDateTime).getTime() / 1000)}:F> (<t:${Math.floor(new Date(newDateTime).getTime() / 1000)}:R>) your time.`)

	}

	const handleTimeChange = (time: string) => {

		setCurrentTime(time)
		handleDateTimeChange(time, currentDate)

	}

	const handleDateChange = (date: Date) => {

		setCurrentDate(date)
		handleDateTimeChange(currentTime, date)

	}

	const discordTimeStamp = Math.floor(new Date(currentDateTime).getTime() / 1000)

	return (

		<div data-testid="Page-PageDiscordTime" className={style.PageDiscordTime}>

			<h1>Discord Time</h1>

			<div className={style.timeControls}>

				<FieldInputDate onChange={(date)=>handleDateChange(date)} />
				<FieldInputTime onChange={(time)=>handleTimeChange(time)} />

			</div>

			{currentDateTime &&

				<div>

					<h3>Full Timestamp</h3>

					<CopyTextToClipboard textToCopy={`<t:${Math.floor(new Date(currentDateTime).getTime() / 1000)}:F>`}>
						<>{`<t:${Math.floor(new Date(currentDateTime).getTime() / 1000)}:F>`}</>
					</CopyTextToClipboard>

					<h3>Descriptive Timestamp</h3>

					<CopyTextToClipboard textToCopy={`<t:${discordTimeStamp}:F> (<t:${discordTimeStamp}:R>) your time.`}>
						<>{`<t:${discordTimeStamp}:F> (<t:${discordTimeStamp}:R>) your time.`}</>
					</CopyTextToClipboard>

				</div>

			}

		</div>

	)

}

export default PageDiscordTime