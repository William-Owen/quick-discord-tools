import * as React from "react"
import { render} from "@testing-library/react"
import Field from "."

describe("Component: Field", () => {

	it("renders", () => {

		const { container } = render(<Field />)
		expect(container).toBeInTheDocument()

	})

})
