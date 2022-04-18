import React from "react"
import clsx from "clsx"
import style from "./FieldInputText.module.sass"

interface FieldInputTextProps {
	children?: React.ReactNode
	className?: string
}

const FieldInputText: React.FC<FieldInputTextProps> = ({ children, className }) => {

	const rootClassName = clsx([style.FieldInputText, "FieldInputText", className])

	return (
		<div data-testid='FieldInputText' className={rootClassName}>
			{children}
		</div>
	)

}

export default FieldInputText
