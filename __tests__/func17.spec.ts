import {DegToRad} from "../src/problems/func17";

describe("Test cases for DegToRad fun", () => {
    test("Should return 1 if input is > than 0", () => {
        expect(DegToRad(45)).toBe(1);
    });
})