import reducer, {
  addCost,
  removeCost,
  updateCost,
  filterByID,
  filterCostByDescription,
} from "@Store/cost/slices";

jest.mock("uuid", () => ({
  v4: () => "123456789",
}));

beforeAll(() => {
  jest.useFakeTimers("modern");
  jest.setSystemTime(new Date(2020, 0, 1));
});

describe("Cost Slice", function () {
  it("should return the initial state", function () {
    expect(reducer(undefined, { type: undefined })).toEqual([]);
  });

  it("add-costs works", function () {
    let previousState = [];
    let payload = {
      category: "default-category",
      price: 100,
      description: "default-description",
      transactionType: "withdraw",
    };

    expect(reducer(previousState, addCost(payload))).toEqual([
      {
        category: "default-category",
        date: "1/1/2020",
        description: "default-description",
        id: "123456789",
        price: 100,
        transactionType: "withdraw",
      },
    ]);
  });

  it("remove costs works", function () {
    let previousState = [
      {
        id: "123456789",
        category: "default-category",
        price: 100,
        date: "1/1/2020",
        description: "default-description",
        transactionType: "withdraw",
      },
      {
        id: "987654321",
        category: "default-category",
        date: "2/1/2020",
        price: 99,
        description: "default-description",
        transactionType: "withdraw",
      },
    ];
    let payload = {
      id: "987654321",
    };

    expect(reducer(previousState, removeCost(payload))).toEqual([
      {
        id: "123456789",
        category: "default-category",
        price: 100,
        date: "1/1/2020",
        description: "default-description",
        transactionType: "withdraw",
      },
    ]);
  });

  it("update costs works", function () {
    let previousState = [
      {
        id: "123456789",
        category: "default-category",
        price: 100,
        date: "1/1/2020",
        description: "default-description",
        transactionType: "withdraw",
      },
    ];
    let payload = {
      id: "123456789",
      category: "default-category",
      price: 110,
      date: "1/1/2020",
      description: "default-description",
      transactionType: "withdraw",
    };

    expect(reducer(previousState, updateCost(payload))).toEqual([
      {
        id: "123456789",
        category: "default-category",
        price: 110,
        date: "1/1/2020",
        description: "default-description",
        transactionType: "withdraw",
      },
    ]);
  });

  it("filter by id works", function () {
    let previousState = [
      {
        id: "123456789",
        category: "default-category",
        price: 100,
        date: "1/1/2020",
        description: "default-description",
        transactionType: "withdraw",
      },
      {
        id: "987654321",
        category: "default-category",
        date: "2/1/2020",
        price: 99,
        description: "default-description",
        transactionType: "withdraw",
      },
    ];
    let payload = {
      id: "987654321",
    };

    expect(reducer(previousState, filterByID(payload))).toEqual([
      {
        id: "987654321",
        category: "default-category",
        date: "2/1/2020",
        price: 99,
        description: "default-description",
        transactionType: "withdraw",
      },
    ]);
  });

  describe("filter by description works", function () {
    it("search within id result in []", function () {
      let previousState = [
        {
          id: "123456789",
          category: "default-category",
          price: 100,
          date: "1/1/2020",
          description: "default-description",
          transactionType: "withdraw",
        },
        {
          id: "987654321",
          category: "default-category",
          date: "2/1/2020",
          price: 99,
          description: "default-description",
          transactionType: "withdraw",
        },
      ];
      let payload = {
        search: "987654321",
      };

      expect(reducer(previousState, filterCostByDescription(payload))).toEqual(
        []
      );
    });

    it("search within description results with data", function () {
      let previousState = [
        {
          id: "123456789",
          category: "default-category",
          price: 100,
          date: "1/1/2020",
          description: "first-description",
          transactionType: "withdraw",
        },
        {
          id: "987654321",
          category: "default-category",
          date: "2/1/2020",
          price: 99,
          description: "second-description",
          transactionType: "withdraw",
        },
      ];
      let payload = {
        search: "first",
      };

      expect(reducer(previousState, filterCostByDescription(payload))).toEqual([
        {
          id: "123456789",
          category: "default-category",
          price: 100,
          date: "1/1/2020",
          description: "first-description",
          transactionType: "withdraw",
        },
      ]);
    });
  });
});
