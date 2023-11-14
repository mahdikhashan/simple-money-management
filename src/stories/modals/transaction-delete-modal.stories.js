import { default as TransactionDeleteModal } from "@Modals/transaction/transaction-delete-modal";
import { reactRouterParameters } from "storybook-addon-react-router-v6";

export default {
  title: "modals/Transaction Delete Modal",
  component: TransactionDeleteModal,
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
