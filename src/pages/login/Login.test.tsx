import React from "react";
import { render, screen } from "@testing-library/react";
import { Login } from "./Login";

const setUserHasAccountToFalse = () => {};

test("renders login form", () => {
  render(<Login setUserHasAccountToFalse={setUserHasAccountToFalse} />);
  const linkElement = screen.getByText("Login");
  expect(linkElement).toBeInTheDocument();
});
