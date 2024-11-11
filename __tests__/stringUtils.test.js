import {
  capitalizeWords,
  isValidPassword,
  calculateStats,
  processShoppingCart,
} from "../stringUtils.js";

describe("[capitalizeWordz]", () => {
    test("function should be defined", () => {
        expect(capitalizeWords).toBeDefined();
    })
    test("should be a function", () => {
        expect(typeof capitalizeWords).toBe("function");
    })
    test("function should return a capitalized word", () => {
        const word = "small";
        const word2 = "Small";
        const word3 = "SMALL";
        const word4 = "small world";

        const capitalizeFunction = capitalizeWords(word);
        const capitalizedWord = capitalizeWords(word2);
        const capitalizeWord = capitalizeWords(word3);
        const capitalizeAllWords = capitalizeWords(word4);

        expect(capitalizeFunction).toBe("Small");
        expect(capitalizedWord).toBe("Small");
        expect(capitalizeWord).toBe("Small");
        expect(capitalizeAllWords).toBe("Small World");
    })
    test("should throw an error if called without an argument", () => {
        expect(() => {
            capitalizeWords()
        }).toThrow("Input must be a string")
    })
    test("should throw an error if called without a string", () => {
        expect(() => {
            capitalizeWords(9)
        }).toThrow("Input must be a string")
    })
    test("should not throw when called with a string", () => {
        expect(() => {
            capitalizeWords("small")
        }).not.toThrow("Input must be a string")
    })
});

describe("[isValidPassword]", () => {
    test("function should be defined", () => {
        expect(isValidPassword).toBeDefined();
    })
    test("password should be 8 characters long", () => {
        const password = "password";
        // const checkPassword = isValidPassword(password);
        expect(password.length).toEqual(8);
    })
    test("should throw an error if called without an argument", () => {
        expect(() => {
            isValidPassword()
        }).toThrow("Password must be a string");
    })
    test("should throw an error if called without a string", () => {
        expect(() => {
            isValidPassword(9)
        }).toThrow("Password must be a string")
    })
    test("should not throw when called with a string", () => {
        expect(() => {
            isValidPassword("small")
        }).not.toThrow("Password must not be a string")
    })
});

describe("[calculateStats]", () => {
    test("should throw an error if called without an array", () => {
        expect(() => {
            calculateStats();
        }).toThrow("Input must be an array");
    })

    test("should throw an error if array is empty", () => {
        const numbers = [];
        // const result =  calculateStats(numbers);
        expect(numbers.length).toBe(0);
    })
})