// Capitalizes the first letter of each word in a string
const capitalizeWords = (str) => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

// console.log(typeof capitalizeWords("words"));

// Checks if a string is a valid password based on rules:
// - At least 8 characters
// - Contains at least one uppercase letter
// - Contains at least one number
// - Contains at least one special character
const isValidPassword = (password) => {
  if (typeof password !== "string") {
    throw new Error("Password must be a string");
  }

  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*]/.test(password);

  return (
    password.length >= minLength && hasUpperCase && hasNumber && hasSpecialChar
  );
};

// console.log(isValidPassword("Pass1@"));

// Takes an array of numbers and returns statistics
const calculateStats = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error("Input must be an array");
  }

  if (numbers.length === 0) {
    throw new Error("Array cannot be empty");
  }

  if (!numbers.every((num) => typeof num === "number")) {
    throw new Error("All elements must be numbers");
  }

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const avg = sum / numbers.length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return {
    sum,
    average: avg,
    minimum: min,
    maximum: max,
    count: numbers.length,
  };
};

console.log(calculateStats([1, 2, 3]));

// Filters and sorts a shopping cart
const processShoppingCart = (cart) => {
  if (!Array.isArray(cart)) {
    throw new Error("Cart must be an array");
  }

  return cart
    .filter((item) => item.quantity > 0 && item.price > 0)
    .sort((a, b) => b.price - a.price)
    .map((item) => ({
      ...item,
      total: item.price * item.quantity,
    }));
};

export {
  capitalizeWords,
  isValidPassword,
  calculateStats,
  processShoppingCart,
};
