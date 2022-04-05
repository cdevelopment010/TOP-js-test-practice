import calculator from '../code/calculator'; 

//add
test('testing add with positive numbers', () => {
    expect(calculator('add', 1, 0)).toBe(1);
    expect(calculator('add', 1, 2)).toBe(3);
    expect(calculator('add', 10, 20)).toBe(30);
    expect(calculator('add', 1000, 2000)).toBe(3000);
})
test('testing add with negative numbers', () => {
    expect(calculator('add', 1, 0)).toBe(1);
    expect(calculator('add', -1, -2)).toBe(-3);
    expect(calculator('add', 10, -20)).toBe(-10);
    expect(calculator('add', -1000, 2000)).toBe(1000);
})
//subtract
test('testing subtract with positive numbers', () => {
    expect(calculator('subtract', 1, 0)).toBe(1);
    expect(calculator('subtract', 1, 2)).toBe(-1);
    expect(calculator('subtract', 10, 20)).toBe(-10);
    expect(calculator('subtract', 10000, 2000)).toBe(8000);
})
test('testing subtract with negative numbers', () => {
    expect(calculator('subtract', 1, 0)).toBe(1);
    expect(calculator('subtract', -1, -2)).toBe(1);
    expect(calculator('subtract', 10, -20)).toBe(30);
    expect(calculator('subtract', 10000, -2000)).toBe(12000);
})
//multiply
test('testing multiply with positive numbers', () => {
    expect(calculator('multiply', 1, 0)).toBe(0);
    expect(calculator('multiply', 1, 2)).toBe(2);
    expect(calculator('multiply', 10, 20)).toBe(200);
    expect(calculator('multiply', 100, 200)).toBe(20000);
})
test('testing multiply with negative numbers', () => {
    expect(calculator('multiply', 1, 0)).toBe(0);
    expect(calculator('multiply', -1, -2)).toBe(2);
    expect(calculator('multiply', 10, -20)).toBe(-200);
    expect(calculator('multiply', 100, -200)).toBe(-20000);
})
//divide
test('testing divide with positive numbers', () => {
    expect(calculator('divide', 1, 0)).toBe(Infinity);
    expect(calculator('divide', 1, 2)).toBeCloseTo(0.5);
    expect(calculator('divide', 20, 20)).toBe(1);
    expect(calculator('divide', 200, 100)).toBe(2);
})
test('testing divide with negative numbers', () => {
    expect(calculator('divide', 1, 0)).toBe(Infinity);
    expect(calculator('divide', -1, -2)).toBeCloseTo(0.5);
    expect(calculator('divide', 20, -20)).toBe(-1);
    expect(calculator('divide', 200, -100)).toBe(-2);
})