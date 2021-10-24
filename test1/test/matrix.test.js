const matrixSum = require("../matrix");

let arr1 = [];
let arr2 = [1, 2, 3];
let arr3 = [[1, 2, 3]];
let arr4 = [
    [1, 2, 3],
    [4, 5, 6],
];
let arr5 = [
    [1, 2, 3],
    [2, 4],
];
let arr6 = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
];
let arr7 = [
    [-2, -2, -2],
    [-5, -5, -5],
];
let arr8 = [[0, 0, 0]];

describe("matrix testing", () => {
    test("array1 should give invalid input", () => {
        let result = matrixSum(arr1);
        expect(result).toBe("Invalid Input");
    });

    test("array2 should give invalid input", () => {
        let result = matrixSum(arr2);
        expect(result).not.toBe("valid Input");
    });

    test("array3 should give sum 6", () => {
        let result = matrixSum(arr3);
        expect(result).toBe(6);
    });

    test("array4 should give sum 21", () => {
        let result = matrixSum(arr4);
        expect(result).toBe(21);
    });

    test("array5 should give invalid input as its not valid matrix", () => {
        let result = matrixSum(arr5);
        expect(result).toBe("Invalid Input");
    });

    test("array6 should give sum 9", () => {
        let result = matrixSum(arr6);
        expect(result).toBe(9);
    });

    test("array7 should give sum -21", () => {
        let result = matrixSum(arr7);
        expect(result).toBe(-21);
    });

    test("array8 should give sum 0", () => {
        let result = matrixSum(arr8);
        expect(result).toBe(0);
    });
});
