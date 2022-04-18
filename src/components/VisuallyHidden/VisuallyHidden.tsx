import React from "react"
import style from "./VisuallyHidden.module.css"
import clsx from "clsx"

interface VisuallyHiddenProps {
  /** Indicates that the content should be shown if focused, i.e. keyboard assisted focus changing  */
  showOnFocus?: boolean,
  /** The hidden content */
  children: React.ReactNode,
}

const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({
	showOnFocus = false,
	children,
}) => {

	const classNames = clsx({
		[style.VisuallyHidden]: !showOnFocus,
		[style.VisuallyHiddenShowOnFocus]: showOnFocus,
	})

	return (

		<div data-testid="-VisuallyHidden" className={classNames}>

			{children}

		</div>

	)

}

export default VisuallyHidden
