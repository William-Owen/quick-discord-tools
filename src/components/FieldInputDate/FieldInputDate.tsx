import React, { useState } from "react"
import clsx from "clsx"
import "react-datepicker/dist/react-datepicker.css"
import style from "./FieldInputDate.module.sass"
import Field from "../Field/Field"
import DatePicker from "react-datepicker"

interface FieldInputDateProps {
	className?: string
	onChange?: (value: Date) => void
}

const FieldInputDate: React.FC<FieldInputDateProps> = ({className, onChange = () => null}) => {

	const [startDate, setStartDate] = useState(new Date())
	const rootClassName = clsx([style.FieldInputDate, "FieldInputDate", className])

	const handleDateChange = (date: Date) => {

		onChange(date)
		setStartDate(date)

	}

	return (

		<div data-testid='FieldInputDate' className={rootClassName}>

			<Field label="Date">

				<DatePicker selected={startDate} onChange={(date) => date && handleDateChange(date)} inline/>

			</Field>

		</div>

	)

}

export default FieldInputDate
