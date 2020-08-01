import React from "react";
import Home from "../Home";
import { render } from "@testing-library/react";



describe("Home", () => {

  it("Should render header", () => {
    const { getByText } = render(<Home />);

    const title = getByText('Faded Philosophy');

    expect(title).toBeInTheDocument();
  });
});