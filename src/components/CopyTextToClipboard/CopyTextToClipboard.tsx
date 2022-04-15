import React from "react"
import clsx from "clsx"
import style from "./CopyTextToClipboard.module.sass"
import copy from "copy-to-clipboard"

interface CopyTextToClipboardProps {
	children?: React.ReactNode
	className?: string
	textToCopy: string
}

const CopyTextToClipboard: React.FC<CopyTextToClipboardProps> = ({ children, className, textToCopy }) => {

	const rootClassName = clsx([style.CopyTextToClipboard, "CopyTextToClipboard", className])

	const handleClick = () => copy(textToCopy)

	return (

		<div data-testid='CopyTextToClipboard' onClick={handleClick} className={rootClassName}>

			{children}

		</div>

	)

}

export default CopyTextToClipboard
