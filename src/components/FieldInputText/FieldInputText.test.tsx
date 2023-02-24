import * as React from "react"
import { render} from "@testing-library/react"
import FieldInputText from "."

describe("Component: FieldInputText", () => {

	it("renders", () => {

		const { container } = render(<FieldInputText />)
		expect(container).toBeInTheDocument()

	})

})
