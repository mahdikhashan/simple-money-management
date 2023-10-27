import { render, screen } from "@testing-library/react";
import Input from "../index";

test("should render input", () => {
  render(<Input value="Description of the current item" />);
  const locatedText = screen.getByDisplayValue(/item/i);

  expect(locatedText).toBeInTheDocument();
});
