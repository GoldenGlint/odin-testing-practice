import { caesarCipher } from "./caesarCipher";

test("basic shift", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
});

test("wrapping from z to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("case preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("punctuation unchanged", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});