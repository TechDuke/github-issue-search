import React from "react";
import {render, fireEvent } from '@testing-library/react'
import App from "./App";
import { act } from "react-dom/test-utils";
import Main from "./Main";
// import fetchMock from "./testMocks/fetchMock";

test("should render App", async () => {
  // Note: Avoid 'act' error: https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning#2-when-testing-custom-hooks
  // let result = {};
  // act(() => { result = render(<App />); });

  const result = render(<App />);
  const { container, getByText } = result;


  // Test loading pages
  const loading = getByText(/loading/i);
  expect(loading).toBeInTheDocument(); // Verify loading text displayed

  // // Wait for 'fetch' async code in the hook to finish loading
  // await act(() => Promise.resolve());
  //
  // // Test images page
  // const heading = getByText(/images of cats/i);
  // const button = getByText(/toggle layout/i);
  //
  // expect(heading).toBeInTheDocument(); // Verify heading displayed
  // expect(button).toBeInTheDocument(); // Verify button displayed
  //
  // // Verify Flexbox container div defaults to '3 column layout' class name
  // expect(document.getElementsByClassName('container-3col').length).toBe(1);
  // expect(document.getElementsByClassName('container-1col').length).toBe(0);
  //
  // // Click button to toggle layout
  // fireEvent.click(button);
  //
  // // Verify Flexbox container div changed to '1 column layout' class name
  // expect(document.getElementsByClassName('container-3col').length).toBe(0);
  // expect(document.getElementsByClassName('container-1col').length).toBe(1);
});

