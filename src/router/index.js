import React from "react";

import DashboardLayout from "@Layouts/DashboardLayout";
import DashboardPage from "@Pages/Dashboard";

import NoMatch from "@Components/app/NoMatch";

import TransactionModal from "@Modals/transaction/TransactionModal";

// interface RouteObject {
//   path?: string;
//   index?: boolean;
//   children?: React.ReactNode;
//   caseSensitive?: boolean;
//   id?: string;
//   loader?: LoaderFunction;
//   action?: ActionFunction;
//   element?: React.ReactNode | null;
//   Component?: React.ComponentType | null;
//   errorElement?: React.ReactNode | null;
//   ErrorBoundary?: React.ComponentType | null;
//   handle?: RouteObject["handle"];
//   shouldRevalidate?: ShouldRevalidateFunction;
//   lazy?: LazyRouteFunction<RouteObject>;
// }

function router(location) {
  return [
    {
      location,
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
        {
          path: "*",
          element: <NoMatch />,
        },
      ],
    },
  ];
}

const modalRouter = [
  {
    path: "transaction/new",
    element: <TransactionModal />,
  },
];

export { modalRouter };
export default router;
