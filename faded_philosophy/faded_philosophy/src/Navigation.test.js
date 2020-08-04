import React from "react";
import Navigation from "./Navigation";
import { render } from "@testing-library/react";
import {
    BrowserRouter
  } from "react-router-dom";



describe("Navigation", () => {

  it("Should render philosophers link", () => {
    const { getByText } = render(<BrowserRouter><Navigation /></BrowserRouter>);

    const philosophersButton = getByText('PHILOSOPHERS');

    expect(philosophersButton).toBeInTheDocument();
  });

  it("Should render strains link", () => {
    const { getByText } = render(<BrowserRouter><Navigation /></BrowserRouter>);

    const strainsButton = getByText('STRAINS');

    expect(strainsButton).toBeInTheDocument();
  });

  it("Should render spirits link", () => {
    const { getByText } = render(<BrowserRouter><Navigation /></BrowserRouter>);

    const spiritsButton = getByText('SPIRITS');

    expect(spiritsButton).toBeInTheDocument();
  });

  it("Should render home link", () => {
    const { getByText } = render(<BrowserRouter><Navigation /></BrowserRouter>);

    const homeButton = getByText('HOME');

    expect(homeButton).toBeInTheDocument();
  });
});