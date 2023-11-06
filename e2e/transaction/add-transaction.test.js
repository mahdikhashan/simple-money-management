// @ts-check
const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:8080");
});

const NEW_TRANSACTION = {
  description: "NewTestDescription",
  price: "1999",
  category: "RandomTestCategory",
};

test.describe("New Transaction", () => {
  test("should allow me to add transaction item", async ({ page }) => {
    const newTransactionButton = page.getByTestId("add-new-transaction-button");

    await newTransactionButton.click();

    const newTransactionModal = page.getByTestId("new-transaction-modal");
    await expect(newTransactionModal).toBeVisible();

    const descriptionInput = page.getByTestId("description-input");
    const priceInput = page.getByTestId("price-input");
    const categoryInput = page.getByTestId("category-input");

    // create a new transaction
    await descriptionInput.fill(NEW_TRANSACTION.description);
    await priceInput.fill(NEW_TRANSACTION.price);
    await categoryInput.fill(NEW_TRANSACTION.category);

    await expect(descriptionInput).toHaveValue("NewTestDescription");
    await expect(priceInput).toHaveValue("1999");
    await expect(categoryInput).toHaveValue("RandomTestCategory");

    //TODO: check for validation to have been passed

    const enterRadio = page.getByTestId("transaction-type-enter");
    await enterRadio.click();

    const transactionRegisterButton = page.getByTestId(
      "transaction-register-button"
    );

    // register the transaction
    await transactionRegisterButton.click();

    await expect(newTransactionModal).toBeVisible({ visible: false });

    // await checkTransactionExistsInLocalStorage(page, NEW_TRANSACTION);
  });
});

// async function checkTransactionExistsInLocalStorage(page, transaction) {
//   return await page.waitForFunction((e) => {
//     return (
//       JSON.parse(localStorage["persist:simple-money-manager"]).length === 1
//     );
//   }, transaction);
// }
