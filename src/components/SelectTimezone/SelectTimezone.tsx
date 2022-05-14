import React, { createRef, MouseEventHandler, useState } from "react"
import clsx from "clsx"
import style from "./SelectTimezone.module.sass"
import timezones from "./timezones.json"
import FieldInputText from "../../components/FieldInputText"

interface SelectTimezoneProps {
	className?: string
	onSelect: (timezone: string) => void
}

const SelectTimezone: React.FC<SelectTimezoneProps> = ({className, onSelect}) => {

	const rootClassName = clsx([style.SelectTimezone, "SelectTimezone", className])
	const [currentSearchTerm, setCurrentSearchTerm] = useState("")
	const [currentTimezones, setCurrentTimezones] = useState([] as string[])
	const inputRef = createRef<HTMLInputElement>()
	const newSearchTerm = (searchTerm:string) => {

		setCurrentSearchTerm(searchTerm)
		handleListUpdate()

	}

	const handleListUpdate = () => {

		if (currentSearchTerm === "") {

			setCurrentTimezones([])

		}else {

			setCurrentTimezones(timezones.filter((timezone:string) => timezone.toLowerCase().includes(currentSearchTerm.toLowerCase())))

		}

	}

	const handelTimeZoneClick: MouseEventHandler<HTMLDivElement> = (event) => {

		const response = event.currentTarget?.dataset?.timezone

		if (response) {

			onSelect(response)

		}

		// clear the value of the input field inputRef

		if (inputRef.current) {

			inputRef.current.value = ""

		}

		setCurrentTimezones([])
		setCurrentSearchTerm("")

	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

		newSearchTerm(event.target.value)

	}

	console.info("currentTimezones", currentTimezones)

	return (
		<div data-testid='SelectTimezone' className={rootClassName}>

			<input ref={inputRef} type="text" placeholder="Add timezone" defaultValue={currentSearchTerm} onChange={handleChange} />

			{currentTimezones?.length > 0 &&
				<>
					<div className={style.TimeZoneList}>

						{currentTimezones.map((timezone:string) => <div data-TimeZone={timezone} onClick={handelTimeZoneClick} key={timezone}>{timezone}</div>)}

					</div>
				</>
			}

		</div>
	)

}

export default SelectTimezone
