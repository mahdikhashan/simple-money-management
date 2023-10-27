import { render, screen } from "@testing-library/react";

import Button from "../index";

test("should render button", () => {
  render(<Button />);
  const label = screen.getByText(/Button/i);

  expect(label).toBeInTheDocument();
});

test("should render search prop correctly", () => {
  const props = {
    search: true,
    label: "Search",
  };

  render(<Button data-test-id="search-btn" {...props} />);

  const searchButton = screen.getAllByTestId("search-btn");

  expect(searchButton).toBeInTheDocument();
});
