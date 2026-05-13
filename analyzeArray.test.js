import { analyzeArray } from "./analyzeArray";

test('object', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6});
});

test('object with negative numbers', () => {
    expect(analyzeArray([-5, -1, -3, -2, -4])).toEqual({average: -3, min: -5, max: -1, length: 5});
});

test('object with single element', () => {
    expect(analyzeArray([7])).toEqual({average: 7, min: 7, max: 7, length: 1});
});