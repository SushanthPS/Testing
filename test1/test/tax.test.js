const tax = require("../tax_calculator");

let income1 = 22000;
let saving1 = 10000;

let income2 = 1000000;
let saving2 = 0;

let income3 = 1000000;
let saving3 = 100000;

let income4 = 250000;
let saving4 = 25000;

let income5 = 2200000;
let saving5 = 1000000;

let income6 = 900000;
let saving6 = 80000;

let income7 = 40000;
let saving7 = 1000;

let income8 = 780000;
let saving8 = 25000;

describe("tax testing", () => {
    test("tax should be 0", () => {
        let result = tax(income1, saving1);
        expect(result).toBe(0);
    });

    test("tax should be 300000", () => {
        let result = tax(income2, saving2);
        expect(result).toBe(300000);
    });

    test("tax should be 297000", () => {
        let result = tax(income3, saving3);
        expect(result).toBe(297000);
    });

    test("tax should be 23750", () => {
        let result = tax(income4, saving4);
        expect(result).toBe(23750);
    });

    test("tax should be 645000", () => {
        let result = tax(income5, saving5);
        expect(result).toBe(645000);
    });

    test("tax should be 175200", () => {
        let result = tax(income6, saving6);
        expect(result).toBe(175200);
    });

    test("tax should be 0", () => {
        let result = tax(income7, saving7);
        expect(result).toBe(0);
    });

    test("tax should be 154500", () => {
        let result = tax(income8, saving8);
        expect(result).toBe(154500);
    });
});
