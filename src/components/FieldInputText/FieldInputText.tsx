import React from "react"
import clsx from "clsx"
import style from "./FieldInputText.module.sass"
import Field from "../Field/Field"

interface FieldInputTextProps {
	className?: string
	value?: string
	onChange?: (value: string) => void
	placeholder?: string
	type?: "text" | "password" | "email" | "number" | "tel" | "url"
	label?: string
}

const FieldInputText: React.FC<FieldInputTextProps> = ({value, onChange,  className, label, placeholder, type }) => {

	const rootClassName = clsx([style.FieldInputText, "FieldInputText", className])

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

		onChange && onChange(event.target.value)

	}

	return (
		<div data-testid='FieldInputText' className={rootClassName}>

			<Field label={label}>

				<input type={type} placeholder={placeholder} onChange={handleChange} value={value} defaultValue={value} />

			</Field>

		</div>
	)

}

export default FieldInputText
