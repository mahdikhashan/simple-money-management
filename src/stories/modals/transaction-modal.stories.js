import { default as TransactionModal } from "@Modals/transaction/transaction-modal";
import { reactRouterParameters } from "storybook-addon-react-router-v6";

export default {
  title: "modals/Transaction Modal",
  component: TransactionModal,
  parameters: {
    layout: "centered",
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { userId: "42" },
      },
      routing: { path: "/users/:userId" },
    }),
  },
};

export const Default = {};
