// Variable Declarations
let variable1 = 10;
const constant1 = 5;

// Traditional function to add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Arrow function to multiply two numbers
const multiplyNumbers = (a, b) => a * b;

// Template literals to create a multi-line string
const resultString = `
The sum of ${variable1} and ${constant1} is: ${addNumbers(variable1, constant1)}.
The product of ${variable1} and ${constant1} is: ${multiplyNumbers(variable1, constant1)}.
`;

// Log the result string to the console
console.log(resultString);
