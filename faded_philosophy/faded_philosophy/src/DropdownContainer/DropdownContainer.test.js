import React from "react";
import DropdownContainer from "./DropdownContainer";
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import {
  BrowserRouter,
} from "react-router-dom";



describe("DropdownContainer", () => {

  it("Should render mood dropdown", () => {
    const { getByText } = render(<BrowserRouter><DropdownContainer /></BrowserRouter>);

    const title = getByText('MOOD');

    expect(title).toBeInTheDocument();
  });

  it("Should render a vibe dropdown", () => {
    const { getByText } = render(<BrowserRouter><DropdownContainer /></BrowserRouter>)

    const vibe = getByText('VIBE');

    expect(vibe).toBeInTheDocument()
  });

  it("Should render a value dropdown", () => {
    const { getByText } = render(<BrowserRouter><DropdownContainer /></BrowserRouter>)

    const value = getByText('VALUE');

    expect(value).toBeInTheDocument()
  });

  it("Should render a submit button", () => {
    const { getByText } = render(<BrowserRouter><DropdownContainer /></BrowserRouter>)

    const button = getByText('FIND YOUR PHILOSOPHY');

    expect(button).toBeInTheDocument()
  });
});