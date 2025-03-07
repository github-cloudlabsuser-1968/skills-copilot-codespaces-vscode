const assert = require('assert');
const { calculate } = require('./test');

// Mock functions for add, subtract, multiply, and divide
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error! Division by zero.";
    }
    return a / b;
}

// Tests for calculate function
describe('calculate', function() {
    it('should return the sum of two numbers when operation is add', function() {
        assert.strictEqual(calculate('add', 2, 3), 5);
    });

    it('should return the difference of two numbers when operation is subtract', function() {
        assert.strictEqual(calculate('subtract', 5, 3), 2);
    });

    it('should return the product of two numbers when operation is multiply', function() {
        assert.strictEqual(calculate('multiply', 2, 3), 6);
    });

    it('should return the quotient of two numbers when operation is divide', function() {
        assert.strictEqual(calculate('divide', 6, 3), 2);
    });

    it('should return an error message when dividing by zero', function() {
        assert.strictEqual(calculate('divide', 6, 0), "Error! Division by zero.");
    });

    it('should return "Invalid operation" for an unknown operation', function() {
        assert.strictEqual(calculate('modulus', 6, 3), "Invalid operation");
    });
});