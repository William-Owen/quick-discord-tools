import * as React from "react"
import { render, screen } from "@testing-library/react"
import Button from "."

describe("Component: Button", () => {

	it("renders", () => {

		const { container } = render(<Button label="" size="medium" onClick={()=>{

			return null

		}} />)
		expect(container).toBeInTheDocument()

	})

})
