import { default as store } from "@/store";

import { addCost, updateCost, removeCost } from "@Store/cost/slices";
import { afterEach, beforeEach } from "jest-circus";

const DEFAULT_COST = {
  price: 1000,
  category: "university",
  description: "my university cost",
  transactionType: "withdraw",
};

function cleanState(state) {}

beforeEach(function () {
  let state = store.getState();
  let costs = state.costs;
  let loading = state.loading;
  let hasErrors = state.loading;
});

afterEach(function () {});

it("initial state is correct", function () {
  expect(state).toEqual({ loading: false, hasError: false, costs: [] });
});

it.skip("cost slice adds correctly", async function () {
  const cost = createCost();
  const result = await store.dispatch(addCost(cost));

  expect(result.type).toBe("costs/addCost");

  expect(state.costs[0]).toHaveProperty(
    "price",
    "category",
    "description",
    "transactionType"
  );
  expect(state.costs[0].price).toEqual(cost.price);
  expect(state.costs[0].category).toEqual(cost.category);
  expect(state.costs[0].description).toEqual(cost.description);
  expect(state.costs[0].transactionType).toEqual(cost.transactionType);
});

it.skip("cost slice updates correctly", async function () {
  const cost = { ...DEFAULT_COST };
  const result = await store.dispatch(addCost(cost));

  expect(result.type).toBe("costs/addCost");

  const state = store.getState().costs;

  expect(state.costs[0].transactionType).toEqual(cost.transactionType);

  const updatedCost = {
    transactionType: "deposit",
  };

  console.log("before", state);

  let id = state.costs[0].id;
  const updateResult = await store.dispatch(updateCost({ id, ...updatedCost }));
  expect(updateResult.type).toBe("costs/updateCost");

  const updatedState = store.getState().costs;

  console.log("after", updatedState);
  console.log("id", id);

  expect(updatedState.costs[0].transactionType).toEqual("deposit");
});
