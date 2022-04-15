import React, { useState } from "react"
import clsx from "clsx"
import style from "./FieldInputTime.module.sass"
import Field from "../Field/Field"

interface FieldInputTimeProps {
	className?: string
	onChange?: (value: string) => void
}

const FieldInputTime: React.FC<FieldInputTimeProps> = ({ className, onChange = () => null }) => {

	const [selectedHour, setSelectedHour] = useState(0)
	const [selectedMinute, setSelectedMinute] = useState(0)

	const rootClassName = clsx([style.FieldInputTime, "FieldInputTime", className])
	const minutes = [0, 15, 30, 45]

	const handelTimeChange = (hour: number, minute: number) => {

		onChange(`${hour}:${minute}`)

	}

	const handleHourChange = (hour: number) => {

		setSelectedHour(hour)
		handelTimeChange(hour, selectedMinute)

	}

	const handleMinuteChange = (minute: number) => {

		setSelectedMinute(minute)
		handelTimeChange(selectedHour, minute)

	}

	const hoursNodes = new Array(4).fill(0).map( ( zero, y ) => {

		const internalArray = new Array(6).fill(0).map( ( zero, z ) => {

			const x = z + y * 6
			return (
				<div data-value={x} onClick={()=>handleHourChange(x)} className={clsx(style.time, selectedHour==x && style.selected)} key={x}>{`${String(x).padStart(2, "0")}`}</div>
			)

		})

		return(<div className={style.group} key={`group-${y}`}>{internalArray}</div>)

	})

	return (

		<Field data-testid='FieldInputTime' className={rootClassName} label="Time">

			<h2>{`${String(selectedHour).padStart(2, "0")}:${String(selectedMinute).padStart(2, "0")}`}</h2>

			<div>

				<div className={style.hoursContainer}>
					{hoursNodes}
				</div>

				<div className={style.minutesContainer}>
					{minutes.map(x => <div onClick={()=>handleMinuteChange(x)} className={clsx(style.time, selectedMinute==x && style.selected)} key={x}>{`${String(x).padStart(2, "0")}`}</div>)}
				</div>

			</div>

		</Field>

	)

}

export default FieldInputTime