import { render, screen } from "@testing-library/react";
import Logo from "../index";

test("should render logo", () => {
  render(<Logo />);
  const image = screen.getByAltText("logo");

  expect(image).toHaveAttribute("src");
});
