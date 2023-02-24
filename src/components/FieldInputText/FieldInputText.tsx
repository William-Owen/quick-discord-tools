import React from "react"
import clsx from "clsx"
import style from "./FieldInputText.module.sass"
import Field from "../Field/Field"

interface FieldInputTextProps {
	className?: string
	value?: string
	onChange?: (value: string) => void
	placeholder?: string
	type?: "text" | "password" | "email" | "number" | "tel" | "url" | "textarea"
	rows?: number
	label?: string
}

const FieldInputText: React.FC<FieldInputTextProps> = ({value, onChange,  className, label, placeholder, type, rows=1 }) => {

	const rootClassName = clsx([style.FieldInputText, "FieldInputText", className])

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

		onChange && onChange(event.target.value)

	}

	return (
		<div data-testid='FieldInputText' className={rootClassName}>

			<Field label={label}>

				{type !== "textarea" &&
					<input type={type} placeholder={placeholder} onChange={handleChange} defaultValue={value} />
				}

				{type === "textarea" &&
					<textarea rows={rows} placeholder={placeholder} onChange={handleChange} defaultValue={value} />
				}

			</Field>

		</div>
	)

}

export default FieldInputText
