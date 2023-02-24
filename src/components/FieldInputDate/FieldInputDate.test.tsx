import * as React from "react"
import { render} from "@testing-library/react"
import FieldInputDate from "."

describe("Component: FieldInputDate", () => {

	it("renders", () => {

		const { container } = render(<FieldInputDate />)
		expect(container).toBeInTheDocument()

	})

})
