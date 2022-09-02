import { render, screen } from "@testing-library/react";
import Logo from '../../logo';

test('should render logo', () => {
  render(<Logo />)
  const image = screen.getByAltText('logo')

  expect(image).toHaveAttribute('src')
})