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

    const descriptionInputValidation = page.getByTestId(
      "validation-error-description"
    );
    const priceInputValidation = page.getByTestId("validation-error-price");
    const categoryInputValidation = page.getByTestId(
      "validation-error-category"
    );

    await expect(descriptionInputValidation).toBeVisible({ visible: false });
    await expect(priceInputValidation).toBeVisible({ visible: false });
    await expect(categoryInputValidation).toBeVisible({ visible: false });

    const enterRadio = page.getByTestId("transaction-type-enter");
    await enterRadio.click();

    const transactionTypeGroupValication = page.getByTestId(
      "validation-error-transaction-type"
    );

    await expect(transactionTypeGroupValication).toBeVisible({
      visible: false,
    });

    const transactionRegisterButton = page.getByTestId(
      "transaction-register-button"
    );

    // register the transaction
    await transactionRegisterButton.click();

    await expect(newTransactionModal).toBeVisible({ visible: false });

    await checkTransactionExistsInLocalStorage(page, 1, NEW_TRANSACTION);
  });
});

async function checkTransactionExistsInLocalStorage(page, length, transaction) {
  const store = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("persist:simple-money-manager"))
  );

  const costsArray = JSON.parse(store.costs);

  expect(costsArray.length).toEqual(length);

  const prettyConstArray = costsArray.reduce((acc, value) => {
    return [
      ...acc,
      {
        price: value.price,
        category: value.category,
        description: value.description,
      },
    ];
  }, []);

  expect(
    prettyConstArray.some((item) =>
      Object.keys(transaction).every((key) => item[key] === transaction[key])
    )
  ).toBe(true);
}
