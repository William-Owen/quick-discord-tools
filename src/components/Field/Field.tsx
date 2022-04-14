import React from "react"
import clsx from "clsx"
import style from "./Field.module.sass"

interface FieldProps {
	children?: React.ReactNode
	className?: string
	label?: string
}

const Field: React.FC<FieldProps> = ({ children, className, label }) => {

	const rootClassName = clsx([style.Field, "Field", className])

	return (
		<div data-testid='Field' className={rootClassName}>

			{label && <label className={style.label}>{label}</label>}

			{children}

		</div>
	)

}

export default Field
