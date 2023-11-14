// TODO: Fix it, Formik not working in storybook

import { InputFormik } from "@Components/common/input";

export default {
  title: "common/Input/Formik",
  component: InputFormik,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    error: true,
    label: "Default Input",
  },
};
