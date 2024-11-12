import {
  capitalizeWords,
  isValidPassword,
  calculateStats,
  processShoppingCart,
  calculateStats,
} from "../stringUtils.js";

describe("[capitalizeWordz]", () => {
  test("function should be defined", () => {
    expect(capitalizeWords).toBeDefined();
  });
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
  });
  test("should throw an error if called without an argument", () => {
    expect(() => {
      capitalizeWords();
    }).toThrow("Input must be a string");
  });
  test("should throw an error if called without a string", () => {
    expect(() => {
      capitalizeWords(9);
    }).toThrow("Input must be a string");
  });
  test("should not throw when called with a string", () => {
    expect(() => {
      capitalizeWords("small");
    }).not.toThrow("Input must be a string");
  });
});

describe("[isValidPassword]", () => {
  test("function should be defined", () => {
    expect(isValidPassword).toBeDefined();
  });
  test("password validity false", () => {
    const password = "password";
    const checkPassword = isValidPassword(password);
    expect(checkPassword).toBe(false);
  });
  test("password validity true", () => {
    const password = "Pass@123";
    const checkPassword = isValidPassword(password);
    expect(checkPassword).toBe(true);
  });
  test("should throw an error if called without an argument", () => {
    expect(() => {
      isValidPassword();
    }).toThrow("Password must be a string");
  });
  test("should throw an error if called without a string", () => {
    expect(() => {
      isValidPassword(9);
    }).toThrow("Password must be a string");
  });
  test("should not throw when called with a string", () => {
    expect(() => {
      isValidPassword("small");
    }).not.toThrow("Password must not be a string");
  });
});

describe("[calculateStats]", () => {
  test("function should be defined", () => {
    expect(calculateStats).toBeDefined();
  });
  test("function should return statistics", () => {
    const stats = [1, 2, 3];
    const calculateStatistics = calculateStats(stats);
    expect(calculateStatistics).toEqual({
      sum: 6,
      average: 3,
      minimum: 1,
      maximum: 3,
      count: 3,
    });
  });
  test("should throw an error if called without an array", () => {
    expect(() => {
      calculateStats();
    }).toThrow("Input must be an array");
  });
  test("should throw an error if array is empty", () => {
    expect(() => {
      const numbers = [];
      calculateStats(numbers);
    }).toThrow("Array cannot be empty");
  });
  test("should throw an error if an element in the array is not a number", () => {
    expect(() => {
      const numbers = [1, 2, "Maboku"];
      calculateStats(numbers);
    }).toThrow("All elements must be numbers");
  });
});

describe("[processingShoppingCart]", () => {
  test("function should be defined", () => {
    expect(processShoppingCart).toBeDefined();
  });
  test("should throw an error if the argument is not an array", () => {
    expect(() => {
      processShoppingCart("hello");
    }).toThrow("Cart must be an array");
  });
});
