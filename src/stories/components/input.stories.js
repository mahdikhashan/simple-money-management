import { default as Input } from "@Components/common/input";

export default {
  title: "common/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    error: false,
  },
};

export const Error = {
  args: {
    error: true,
  },
};
