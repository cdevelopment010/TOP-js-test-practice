import analyseArray from "../code/analyseArray";


test('analyseArray([1,8,3,4,2,6])', () => {
    expect(analyseArray([1,8,3,4,2,6])).toMatchObject({average: 4, min: 1, max: 8, length: 6})
})
test('analyseArray([1,1,1,1,1])', () => {
    expect(analyseArray([1,1,1,1,1])).toMatchObject({average: 1, min: 1, max: 1, length: 5})
})
test('analyseArray([])', () => {
    expect(analyseArray([])).toMatchObject({average: null, min: null, max: null, length: 0})
})