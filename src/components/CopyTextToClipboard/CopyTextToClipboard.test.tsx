import * as React from "react"
import { render} from "@testing-library/react"
import CopyTextToClipboard from "."

describe("Component: CopyTextToClipboard", () => {

	it("renders", () => {

		const { container } = render(<CopyTextToClipboard textToCopy="" />)
		expect(container).toBeInTheDocument()

	})

})
