import { render, screen } from "@testing-library/react";
import Header from "./index";

test("header displays correct title", () => {
  render(<Header />);
  const headerTitle = screen.getByText(/zelda: breath of the wild compendium/i);
  expect(headerTitle).toBeInTheDocument();
});
