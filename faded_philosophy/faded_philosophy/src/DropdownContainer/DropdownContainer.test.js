import React from "react";
import DropdownContainer from "./DropdownContainer";
import '@testing-library/jest-dom/extend-expect'
import {
  BrowserRouter,
} from "react-router-dom";

import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { toneChecker } from '../ApiCalls';
jest.mock('../ApiCalls');



describe("DropdownContainer", () => {

  let mockToneChecker;

  beforeEach(() => {
    mockToneChecker = {
      document_tone: {
        tones: [{
          score: 0.842108,
          tone_id: "analytical",
          tone_name: "Analytical"
        }]
      }
    }
  })

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

  it("Should render pairings on click", async () => {
    toneChecker.mockResolvedValue(mockToneChecker)
    const { getByText } = render(<BrowserRouter><DropdownContainer /></BrowserRouter>)

    const button = getByText('FIND YOUR PHILOSOPHY');
    fireEvent.click(button)
    
    const philosopher = await waitFor(() => getByText('Kevin Gates'))

    expect(philosopher).toBeInTheDocument()
  });
});