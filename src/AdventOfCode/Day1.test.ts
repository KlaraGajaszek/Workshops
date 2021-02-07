import { sum2020, sum2020Part2, sum2020Part3 } from './Day1';

describe('test to function from Day1 tasks', () => {
  it('sum2020Part3 return good score', () => {
    const arr = [1, 2, 3, 4, 5];
    const sortedInput = arr.sort((a, b) => a - b);
    const getMultiplyOfNumber = sum2020Part3(0, sortedInput.length - 1, 9, sortedInput);
    expect(getMultiplyOfNumber).toBe(20);
  });
});
