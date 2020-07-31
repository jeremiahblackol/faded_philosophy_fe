import React from "react";
import Header from "./Header";
import { render } from "@testing-library/react";



describe("Header", () => {

  it("Should render title", () => {
    const { getByText } = render(<Header />);

    const title = getByText('Faded Philosophy');

    expect(title).toBeInTheDocument();
  });
});
