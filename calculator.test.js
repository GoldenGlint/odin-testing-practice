import {calculator} from "./calculator";

test("adding", ()=>{
    expect(calculator.add(1,2)).toBe(3);
})

test("subtracting", ()=>{
    expect(calculator.subtract(1,2)).toBe(-1);
})

test("divide", ()=>{
    expect(calculator.divide(6,3)).toBe(2);
})

test("multiply", ()=>{
    expect(calculator.multiply(6,3)).toBe(18);
})