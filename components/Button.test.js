import { render, screen } from "@testing-library/react";
import Button from "../components/Button";

test("renders the button", () => {
  render(<Button label="Click me" />); // Ensure the label matches
  expect(screen.getByText("Click me")).toBeInTheDocument(); // Use 'expect'
});
