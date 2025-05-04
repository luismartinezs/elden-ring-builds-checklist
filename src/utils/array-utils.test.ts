import { describe, it, expect } from "vitest";
import { getPreferredOrder } from "./array-utils";

const preferredOrderArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

describe.only('getPreferredOrder', () => {
  it('should return the preferred order of the array (1)', () => {
    const arrToOrder = ['b', 'c', 'a'];
    const expected = ['a', 'b', 'c'];
    const result = getPreferredOrder(arrToOrder, preferredOrderArr);
    expect(result).toEqual(expected);
  });

  it('should return the preferred order of the array (2)', () => {
    const arrToOrder = ['d', 'g', 'a'];
    const expected = ['a', 'd', 'g'];
    const result = getPreferredOrder(arrToOrder, preferredOrderArr);
    expect(result).toEqual(expected);
  });

});