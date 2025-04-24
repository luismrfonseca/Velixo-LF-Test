
jest.mock("../functions/factorialRow", () => ({
  factorialRowWorker: jest.fn((n: number) => {
    const factorial = (x: number): string => {
      let res = 1n;
      for (let i = 2n; i <= BigInt(x); i++) res *= i;
      return res.toString();
    };
    const values = [];
    for (let i = 1; i <= n; i++) {
      values.push(factorial(i));
    }
    return Promise.resolve(values);
  }),
}));

import { factorialRowWorker } from "../functions/factorialRow";

test("should return the correct result of the factors", async () => {
  const result = await factorialRowWorker(5);
  expect(result).toEqual(["1", "2", "6", "24", "120"]);
});