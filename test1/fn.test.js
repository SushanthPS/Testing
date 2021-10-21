const { sum1, sum2 } = require("./fn");

// describe("sum function", () => {
//     test("add 2, 3, should return 5", () => {
//         let result = sum1(2, 3);
//         expect(result).toBe(5);
//     });
//     test("add 2, -10, should return 8", () => {
//         let result = sum2(2, -10);
//         expect(result).toBe(8);
//     });
// });

// describe("diff checks", () => {
//     test("undefined", () => {
//         expect(undefined).toBeUndefined();
//     });
//     test("defined", () => {
//         expect("abc").toBeDefined();
//     });
//     test("null", () => {
//         expect(null).toBeNull();
//     });
//     test("Nan", () => {
//         expect(8 * "abc").toBeNaN();
//     });
// });

describe("number checks", () => {
    test("less than", () => {
        expect(100).toBeLessThan(101);
        expect(100).toBeLessThanOrEqual(100);
    });
});
