// TODO: Fix storybook page issue with invalid hooks

import { default as DashboardPage } from "@Pages/Dashboard";

import { withReactContext } from 'storybook-react-context';

import { DarkModeContext } from '../../contexts/darkMode/index'

export default {
  title: "pages/DashboardPage",
  component: DashboardPage,
  parameters: {
    layout: "centered",
  },
  decorators: [
    withReactContext({
      Context: DarkModeContext,
      initialState: { darkMode: false, toggleDarkMode: () => {} },
    }),
  ],

};

export const Default = {};
