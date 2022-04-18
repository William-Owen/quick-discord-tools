import { useState } from "react"
import FieldInputDate from "../../components/FieldInputDate"
import FieldInputTime from "../../components/FieldInputTime"
import style from "./PageMultipleDiscordTime.module.sass"
import moment from "moment"
import CopyTextToClipboard from "../../components/CopyTextToClipboard"
import Button from "../../components/Button"

const PageMultipleDiscordTime: React.FC = () => {

	const [currentDate, setCurrentDate] = useState<Date>(new Date())
	const [currentTime, setCurrentTime] = useState<string>("00:00")
	const [dateTimeArray, setDateTimeArray] = useState<Date[]>([])

	const [currentDateTime, setCurrentDateTime] = useState<Date>(moment().toDate())
	const numberIconsArray = [":one:", ":two:", ":three:", ":four:",":five:",":six:",":seven:",":eight:",":nine:",":ten:"]
	let dateTimeIconString = ""

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

	const handleAddTime = () => {

		const newArray = [...dateTimeArray, currentDateTime]
		newArray.sort((a, b) => a.getTime() - b.getTime())

		// remove duplicate dates from the newArray
		const newArrayWithoutDuplicates = newArray.filter((item, index) => {

			return newArray.indexOf(item) === index

		})

		setDateTimeArray(newArrayWithoutDuplicates)

	}

	const makeDiscordTimeStamp = (dateTime:Date) => Math.floor(new Date(dateTime).getTime() / 1000)

	dateTimeArray.forEach((dateTime, index) => {

		dateTimeIconString += `${numberIconsArray[index]} <t:${makeDiscordTimeStamp(dateTime)}:F> (<t:${makeDiscordTimeStamp(dateTime)}:R>)\n`

	})

	const handleRemoveAll = () => setDateTimeArray([])

	const removeItemByIndex = (index: number) => {

		const newArray = [...dateTimeArray]
		newArray.splice(index, 1)
		setDateTimeArray(newArray)

	}

	return (

		<div data-testid="Page-PageDiscordTime" className={style.PageMultipleDiscordTime}>

			<h1>Discord Time Poll</h1>

			<div className={style.timeControls}>

				<div>
					<FieldInputDate onChange={(date)=>handleDateChange(date)} />
				</div>

				<div>
					<FieldInputTime onChange={(time)=>handleTimeChange(time)} />

					<div className={style.actionsBar}>

						<Button size="medium" label="Add time" onClick={handleAddTime} />
						<Button size="medium" label="Clear" onClick={handleRemoveAll} />

					</div>

				</div>

			</div>

			{dateTimeIconString &&

				<div>

					<h3>Descriptive Timestamp</h3>
					<p>Ordered by date, duplicates removed</p>

					<CopyTextToClipboard className={style.timeListing} textToCopy={dateTimeIconString}>

						<>

							{dateTimeArray.map((dateTime, index) => {

								return(<div key={index}>{moment(dateTime).format("dddd, MMMM D, YYYY [at] HH:mm")} <Button size="text" label="Remove" onClick={()=>{

									removeItemByIndex(index)

								}} /> </div>)

							})}

						</>

					</CopyTextToClipboard>

				</div>

			}

		</div>

	)

}

export default PageMultipleDiscordTime