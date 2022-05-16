import * as React from "react"
import { render } from "@testing-library/react"
import FieldInputDateTime from "."

const onTimeChange = jest.fn()

describe("Component: FieldInputDateTime", () => {

	it("renders", () => {

		const { container } = render(<FieldInputDateTime  onTimeChange={onTimeChange} onDateChange={onTimeChange} />)
		expect(container).toBeInTheDocument()

	})

})
