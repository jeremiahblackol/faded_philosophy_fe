import React from "react";
import Navigation from "./Header";
import { render } from "@testing-library/react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";



describe("Navigation", () => {

  it("Should render navigation", () => {
    const { getByText } = render(<BrowserRouter><Navigation /></BrowserRouter>);

    const philosophersButton = getByText('Philosophers');

    expect(philosophersButton).toBeInTheDocument();
  });
});