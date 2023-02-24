import React, {MouseEvent} from "react"
import style from "./Button.module.sass"
import clsx from "clsx"
import VisuallyHidden from "../VisuallyHidden"

interface ButtonProps {
	/** Indicates that this button should be considered the primary action for a given workflow. The number of primary actions should be kept to a minimum within a given workflow step. */
	primary?: boolean,
	/** Indicates that this action might be dangerous, i.e. destructive or irreversible. */
	warning?: boolean,
	/** Indicates that this action is currently not available to the user. Useful when an awareness of the actions presence is relevant despite necessary preconditions for its use not having been met. */
	disabled?: boolean,
	/** Overrides the visually hidden warning prefix to allow for appropriate language translation */
	warningLabelPrefix?: string,
	/** Button description label */
	label: string,
	/** Used to control predefined sizing small, medium and large */
	size?: "text" | "small" | "medium" | "large",
	/** Primary action event handler*/
	onClick: React.MouseEventHandler<HTMLButtonElement>,
}

const Button: React.FC<ButtonProps> = ({
	primary = false,
	disabled = false,
	warning = false,
	warningLabelPrefix = "Warning:",
	label,
	size = "medium",
	onClick,
}) => {

	const classNames = clsx({
		[style.Button]: true,
		[style.primary]: primary,
		[style.warning]: warning,
		[style.disabled]: disabled,
		[style.text]: size==="text",
		[style.small]: size==="small",
		[style.medium]: size==="medium",
		[style.large]: size==="large",
	})

	const handelOnClick = (event: MouseEvent<HTMLButtonElement>) => onClick(event)

	return (

		<button data-testid="-button" onClick={handelOnClick} disabled={disabled} className={classNames}>

			{warning && <VisuallyHidden>{warningLabelPrefix}</VisuallyHidden>}

			{label}

		</button>

	)

}

export default Button