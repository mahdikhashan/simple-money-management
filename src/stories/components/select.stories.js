import { default as Select } from "@Components/common/select";

export default {
  title: "common/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    label: "Select Value",
    variant: "up",
    id: "up",
  },
};
