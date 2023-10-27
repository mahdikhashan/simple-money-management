import { render, screen } from "@testing-library/react";
import Card from "../../card";

test("should render card", () => {
  render(
    <Card>
      <p>Styled card</p>
    </Card>,
  );
  const locatedText = screen.getByText(/Styled card/i);

  expect(locatedText).toBeInTheDocument();
});
