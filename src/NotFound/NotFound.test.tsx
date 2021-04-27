import { render, screen } from "@testing-library/react";
import NotFound from "./index";

test("Non-existent routes display error message", () => {
  render(<NotFound />);
  const errorMessage = screen.getByText(/error: path does not exist./i);
  expect(errorMessage).toBeInTheDocument();
});
