const { add, subtract } = require('./arithmetic-function')

test("test addition of two positive values", () => {
    let firstNumber = 82;
    let secondNumber = 18;
    expect(add(firstNumber, secondNumber)).toBe(100)
})

test("test that addition of a positive and a negative number works perfectly", () => {
let firstNumber = 82;
    let secondNumber = -18;
    expect(add(firstNumber, secondNumber)).toBe(64)

})

test("test that addition of two negative number gives a negative result", () => {
let firstNumber = -10;
    let secondNumber = -5;
    expect(add(firstNumber, secondNumber)).toBe(-15)

})

test("test that subtraction is working", () => {
let firstNumber = 80;
    let secondNumber = 15;
    expect(subtract(firstNumber, secondNumber)).toBe(65)

})

test("test that two negative numbers subtraction gives accurate result", () => {
let firstNumber = -8;
    let secondNumber = -3;
    expect(subtract(firstNumber, secondNumber)).toBe(-5)

})
