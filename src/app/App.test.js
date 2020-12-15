import React from "react";
import {render } from '@testing-library/react'
import App from "./App";

test("should render App", async () => {
  const result = render(<App />);
  const { getByText } = result;

  // Test for main page
  const heading = getByText(/github search/i);
  expect(heading).toBeInTheDocument(); // Verify heading tag displayed
});

