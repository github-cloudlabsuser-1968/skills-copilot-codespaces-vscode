// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        return "Error! Division by zero.";
    }
    return a / b;
}

// Function to perform the chosen operation
function calculate(operation, num1, num2) {
    switch (operation) {
        case 'add':
            return add(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
        case 'multiply':
            return multiply(num1, num2);
        case 'divide':
            return divide(num1, num2);
        default:
            return "Invalid operation";
    }
}

// Main function to run the calculator
function main() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const operation = prompt("Enter the operation (add, subtract, multiply, divide):").toLowerCase();

    const result = calculate(operation, num1, num2);
    console.log(`The result is: ${result}`);
}

// Run the calculator
main();