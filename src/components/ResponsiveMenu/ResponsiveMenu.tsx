import React, { useState } from "react"
import style from "./ResponsiveMenu.module.sass"

interface ResponsiveMenuProps {
	className?: string
	Children: React.ReactNode
}

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ className, Children}) => {

	const rootClassName = [style.ResponsiveMenu, "ResponsiveMenu", className].join(" ")
	const [menuOpen, setMenuOpen] = useState(false)

	const handleMenuClick = () => {

		setMenuOpen(!menuOpen)

	}

	return (

		<div data-testid='ResponsiveMenu' className={rootClassName}>

			<button onClick={handleMenuClick}>
				{menuOpen ? "Close Menu" : "Open Menu"}
			</button>

			<div className={style.menu}>

				{Children}

			</div>

		</div>

	)

}

export default ResponsiveMenu