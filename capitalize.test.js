import { capitalize }  from "./capitalize";

test ("capitalize", ()=>{
    expect(capitalize("banana")).toBe("Banana");
})

test ("one letter", ()=>{
    expect(capitalize("a")).toBe("A");
})