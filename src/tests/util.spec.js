import { findAveragePrice } from "../util";

describe("findAveragePrice", () => {
  it("When given data with prices, it returns the average", () => {
    const result = findAveragePrice([{ price: 1 }, { price: 2 }, { price: 6 }]);
    expect(result).toBe("3.00");
  });
});
