import React, { useState } from "react"
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

	const [wasCopied, setWasCopied] = useState(false)

	const classNameArray = [
		style.CopyTextToClipboard,
		"CopyTextToClipboard",
		className
	]

	// if wasCopied thten add the className

	if (wasCopied) {

		classNameArray.push(style.wasCopied)

	}

	const handleClick = () => {

		copy(textToCopy)
		setWasCopied(true)

		setTimeout(() => {

			setWasCopied(false)

		}, 500)

	}

	const rootClassName = clsx(classNameArray)

	return (

		<div data-testid='CopyTextToClipboard' onClick={handleClick} className={rootClassName}>

			<div className={style.copied}>Copied to clipboard</div>
			<div className={style.clickToCopyText}>{clickToCopyText}</div>

			{children}

		</div>

	)

}

export default CopyTextToClipboard
