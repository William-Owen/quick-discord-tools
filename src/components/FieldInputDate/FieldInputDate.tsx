import React, { useState } from "react"
import clsx from "clsx"
import "react-datepicker/dist/react-datepicker.css"
import style from "./FieldInputDate.module.sass"
import Field from "../Field/Field"
import DatePicker from "react-datepicker"

interface FieldInputDateProps {
	className?: string
}

const FieldInputDate: React.FC<FieldInputDateProps> = ({className }) => {

	const [startDate, setStartDate] = useState(new Date())
	const rootClassName = clsx([style.FieldInputDate, "FieldInputDate", className])

	const hours = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
	const minutes = ["00", "15", "30", "45"]
	const dayTime = ["AM", "PM"]

	return (
		<div data-testid='FieldInputDate' className={rootClassName}>
			<Field label="Timestamp Date">
				<DatePicker
					selected={startDate}
					onChange={(date) => date && setStartDate(date)}
					inline/>

				<div className={style.TimePicker}>

					<div className={style.hours}>
						{hours.map(x => <div key={x}>{x}</div>)}
					</div>

					<div className={style.minutes}>
						{minutes.map(x => <div key={x}>{x}</div>)}
					</div>

					<div className={style.dayTime}>
						{dayTime.map(x => <div key={x}>{x}</div>)}
					</div>

				</div>

			</Field>

		</div>
	)

}

export default FieldInputDate
