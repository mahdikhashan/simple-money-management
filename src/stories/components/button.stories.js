import { default as Button } from "@Components/common/button";

export default {
  title: "common/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
};

export const Primary = {
  args: {
    label: "New Transaction Button",
  },
};

export const Small = {
  args: {
    variant: "small",
  },
};

export const Medium = {
  args: {
    variant: "medium",
  },
};

export const Large = {
  args: {
    variant: "large",
  },
};

export const Search = {
  args: {
    variant: "search",
  },
};

export const Icon = {
  args: {
    variant: "icon",
  },
};
