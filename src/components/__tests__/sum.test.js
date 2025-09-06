import { sum } from "../sum";

test("Sum function will return sum of two values", function () {
  const result = sum(2, 4);

  //Assertion
  expect(result).toBe(6);
});
