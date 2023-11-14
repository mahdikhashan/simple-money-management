/** @type { import('@storybook/react').Preview } */

import "@Styles/global.scss";

import React from "react";

import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "@/store";

export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={["/"]}>
      <Provider store={store}>
        <Story />
      </Provider>
    </MemoryRouter>
  ),
];

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
