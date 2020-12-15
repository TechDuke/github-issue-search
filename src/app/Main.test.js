import React from "react";
import { render } from "@testing-library/react";
import Main from "./Main";

/**
 * Test that the Main component renders.
 */
test("should render Main", async () => {
  const result = render(<Main />);
  const { getByText } = result;

  // Test for main page
  const heading = getByText(/github search/i);
  expect(heading).toBeInTheDocument(); // Verify heading tag displayed
});
