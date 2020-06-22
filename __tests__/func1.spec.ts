import {Sign} from "../src/problems/func1";

describe("Test cases for Sign fun", () => {
    test("Should return 1 if input is > than 0", () => {
        expect(Sign(10)).toBeCloseTo(1);
    });
    test("Should return 0 if input is = 0", () => {
        expect(Sign(0)).toBeCloseTo(0);
    });
})