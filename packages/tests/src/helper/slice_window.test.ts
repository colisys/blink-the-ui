import { expect, it } from 'vitest';
import { slice, sliceRight, window } from '@blink-the-ui/helper';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrobj = [{ a: 1 }, { a: 2 }, { a: 3 }];

it('function slice should pass', () => {
  expect(slice(arr, 0, 3)).toStrictEqual([1, 2, 3]);
  expect(arr.length).toBe(10);
  const s = slice(arr, 0, 3);
  arr[1] = 5;
  expect(arr[1] != s[1]).toBe(true);

  expect(slice(arrobj, 0, 2)).toStrictEqual([{ a: 1 }, { a: 2 }]);
  expect(arrobj.length).toBe(3);
  const s2 = slice(arrobj, 0, 2);
  arrobj[1].a = 5;
  expect(arrobj[1].a == s2[1].a).toBe(true);
});

it('function sliceRight should pass', () => {
  expect(sliceRight(arr, 3, 3)).toStrictEqual([8, 9, 10]);
  expect(sliceRight(arrobj, 2, 2)).toStrictEqual([{ a: 5 }, { a: 3 }]);
});

it('function window should pass', () => {
  for (const item of window([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)) {
    expect(item.length).toBe(3);
  }
  arrobj.push({ a: 4 });
  for (const item of window(arrobj, 2)) {
    expect(item.length).toBe(2);
  }
});
