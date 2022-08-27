import { render, screen } from "@testing-library/react";
import Button from "../../button";

test('should render button', () => {
  render(<Button />)
  const label = screen.getByText(/Button/i)

  expect(label).toBeInTheDocument()
})