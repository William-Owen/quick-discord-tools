import React from "react"
import clsx from "clsx"
import style from "./CopyTextToClipboard.module.sass"
import copy from "copy-to-clipboard"

interface CopyTextToClipboardProps {
	children?: React.ReactNode
	className?: string
	textToCopy: string
	clickToCopyText?: string
}

const CopyTextToClipboard: React.FC<CopyTextToClipboardProps> = ({ children, className, textToCopy, clickToCopyText = "Click to copy" }) => {

	const rootClassName = clsx([style.CopyTextToClipboard, "CopyTextToClipboard", className])

	const handleClick = () => copy(textToCopy)

	return (

		<div data-testid='CopyTextToClipboard' onClick={handleClick} className={rootClassName}>

			<div className={style.clickToCopyText}>{clickToCopyText}</div>

			{children}

		</div>

	)

}

export default CopyTextToClipboard
