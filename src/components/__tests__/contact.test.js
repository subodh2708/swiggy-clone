import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("contact should be rendered", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should load button inside component", () => {
  render(<Contact />);

  const submit = screen.getByText("Submit");
  expect(submit).toBeInTheDocument();
});
