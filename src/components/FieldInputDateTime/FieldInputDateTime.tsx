import React from "react"
import clsx from "clsx"
import style from "./FieldInputDateTime.module.sass"
import FieldInputDate from "../../components/FieldInputDate"
import FieldInputTime from "../../components/FieldInputTime"

interface FieldInputDateTimeProps {
	className?: string
	onTimeChange: (time: string) => void
	onDateChange: (date: Date) => void
}

const FieldInputDateTime: React.FC<FieldInputDateTimeProps> = ({ className,  onTimeChange, onDateChange}) => {

	const rootClassName = clsx([style.FieldInputDateTime, "FieldInputDateTime", className])

	return (
		<div data-testid='FieldInputDateTime' className={rootClassName}>
			<FieldInputDate onChange={onDateChange} />
			<FieldInputTime onChange={onTimeChange} />
		</div>
	)

}

export default FieldInputDateTime
