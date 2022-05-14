import * as React from "react"
import { render } from "@testing-library/react"
import SelectTimezone from "."

describe("Component: SelectTimezone", () => {

	it("renders", () => {

		const { container } = render(<SelectTimezone onSelect={()=>{

			return null

		}} />)

		expect(container).toBeInTheDocument()

	})

})
