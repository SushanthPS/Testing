const { sum1, sum2 } = require("../fn");

describe("sum function", () => {
    test("add 2, 3, should return 5", () => {
        let result = sum1(2, 3);
        expect(result).toBe(5);
    });
    test("add 2, -10, should return 8", () => {
        let result = sum2(2, -10);
        expect(result).toBe(8);
    });

    test("object check", () => {
        expect({ abc: 123 }).toEqual({ abc: 123 });
    });

    test("array check", () => {
        expect([1, 2]).toEqual([1, 2]);
    });

    test("array false check", () => {
        expect([1, 2]).not.toEqual([1, 2, 3]);
    });
});

describe("diff checks", () => {
    test("undefined", () => {
        expect(undefined).toBeUndefined();
    });
    test("defined", () => {
        expect("abc").toBeDefined();
    });
    test("null", () => {
        expect(null).toBeNull();
    });
    test("Nan", () => {
        expect(8 * "abc").toBeNaN();
    });
});

describe("number checks", () => {
    test("less than", () => {
        expect(100).toBeLessThan(101);
        expect(100).toBeLessThanOrEqual(100);
    });
});

describe("advanced checks", () => {
    test("instance check", () => {
        let output = { abc: 1, efg: 3 };
        expect(output).toBeInstanceOf(Object);
    });

    test("array contains", () => {
        let arr = ["a", "b", "c", "d", "e"];
        expect(arr).toEqual(expect.arrayContaining(["e", "b", "a"]));
    });
});
