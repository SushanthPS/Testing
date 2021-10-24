const password = require("../password");

let str1 = "";
let str2 = "a2B$";
let str3 = "fsdhflDF43";
let str4 = "DFDFH434";
let str5 = "FDSFfdf434";
let str6 = "434%$#sdfdfFDF";
let str7 = "fsdjflk44348";
let str8 = "fsdjfklFDFSFFD$#$%@";
let str9 = "-5edfk";
let str10 = "0-54a";

describe("password testing", () => {
    test("str1 should give invalid input", () => {
        let result = password(str1);
        expect(result).toBe("Invalid, should contain more than 5 characters");
    });

    test("str2 should give invalid input", () => {
        let result = password(str2);
        expect(result).not.toBe("Valid Input");
    });

    test("str3 should give special character is missing", () => {
        let result = password(str3);
        expect(result).toBe("special character is missing");
    });

    test("str4 should give  small character missing", () => {
        let result = password(str4);
        expect(result).toBe("small letter is missing");
    });

    test("str5 should give special character is missing", () => {
        let result = password(str5);
        expect(result).toBe("special character is missing");
    });

    test("str6 should give Valid Password", () => {
        let result = password(str6);
        expect(result).toBe("Valid Password");
    });

    test("str7 should give capital character is missing", () => {
        let result = password(str7);
        expect(result).toBe("capital letter is missing");
    });

    test("str8 should give number is missing", () => {
        let result = password(str8);
        expect(result).toBe("number is missing");
    });

    test("str9 should give capital character is missing", () => {
        let result = password(str9);
        expect(result).toBe("capital letter is missing");
    });

    test("str10 should give invalid input", () => {
        let result = password(str10);
        expect(result).toBe("Invalid, should contain more than 5 characters");
    });
});
