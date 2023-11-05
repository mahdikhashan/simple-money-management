/**
 * @jest-environment jsdom
 */

import React from "react";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { default as Navigation } from "@Components/app/Navigation";

import { DarkModeProvider } from "@/contexts/darkMode";

import { MemoryRouter } from "react-router-dom";

jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withTranslation: () => (Component) => {
    Component.defaultProps = { ...Component.defaultProps, t: () => "" };
    return Component;
  },
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost/example/path",
  }),
}));

it("Locales Working Correctly", () => {
  const route = "/some-route";

  const { getByTestId } = render(
    <DarkModeProvider>
      <MemoryRouter initialEntries={[route]}>
        <Navigation t={() => "Text is Translated"} />
      </MemoryRouter>
      ,
    </DarkModeProvider>
  );

  const mainNavigation = getByTestId("main-navigation");

  expect(mainNavigation.textContent).toBe("Text is Translated");
});
