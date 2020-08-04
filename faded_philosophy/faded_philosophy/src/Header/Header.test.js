import React from "react";
import Header from "./Header";
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import {
  BrowserRouter,
} from "react-router-dom";



describe("Header", () => {

  it("Should render title", () => {
    // unit
    const { getByText } = render(<BrowserRouter><Header /></BrowserRouter>);

    const title = getByText('FADED');
    const secondHeader = getByText('PHILOSOPHY')

    expect(title).toBeInTheDocument();
    expect(secondHeader).toBeInTheDocument()
  });

  it("Should render a dropdown when home button is clicked", () => {
    // integration
    const { getByText } = render(<BrowserRouter><Header /></BrowserRouter>)

    const homeButton = getByText('HOME');
    const dropdownHeader = getByText('Please select from the following options:')

    fireEvent.click(homeButton)

    expect(dropdownHeader).toBeInTheDocument()
  });
});
