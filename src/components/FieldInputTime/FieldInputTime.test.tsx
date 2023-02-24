import * as React from "react"
import { render} from "@testing-library/react"
import FieldInputTime from "."

describe("Component: FieldInputTime", () => {

	it("renders", () => {

		const { container } = render(<FieldInputTime />)
		expect(container).toBeInTheDocument()

	})

})
