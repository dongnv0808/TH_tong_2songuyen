import {Caculator} from '../app'

describe("add function", () => {
test("add two number", () => {
    const number1 = 1;
    const number2 = 2;
    const result = 3;
    expect(Caculator.add(number1, number2)).toBe(result);;
  });
});