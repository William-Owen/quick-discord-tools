import React, { useState } from "react"
import clsx from "clsx"
import "react-datepicker/dist/react-datepicker.css"
import style from "./FieldInputDate.module.sass"
import Field from "../Field/Field"
import DatePicker from "react-datepicker"
import moment from "moment"

interface FieldInputDateProps {
	className?: string
	onChange?: (value: Date) => void
	label?: string
}

const FieldInputDate: React.FC<FieldInputDateProps> = ({className, onChange = () => null, label}) => {

	const [currentDate, setCurrentDate] = useState(new Date())
	const rootClassName = clsx([style.FieldInputDate, "FieldInputDate", className])

	const handleDateChange = (date: Date) => {

		onChange(date)
		setCurrentDate(date)

	}

	return (

		<div data-testid='FieldInputDate' className={rootClassName}>

			<Field label={label}>

				<h3>{moment(currentDate).format("dddd, MMMM D, YYYY")}</h3>
				<DatePicker selected={currentDate} onChange={(date) => date && handleDateChange(date)} inline/>

			</Field>

		</div>

	)

}

export default FieldInputDate
