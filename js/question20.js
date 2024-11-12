
var num1 = Number(prompt("Enter the first number:"));
var num2 = Number(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /):");

switch (operation) {
    case '+':
        console.log("The result of " + num1 + " + " + num2 + " is: " + (num1 + num2));
        break;
    case '-':
        console.log("The result of " + num1 + " - " + num2 + " is: " + (num1 - num2));
        break;
    case '*':
        console.log("The result of " + num1 + " * " + num2 + " is: " + (num1 * num2));
        break;
    case '/':
        if (num2 === 0) {
            console.log("Error: Division by zero is not allowed.");
        } else {
            console.log("The result of " + num1 + " / " + num2 + " is: " + (num1 / num2));
        }
        break;
    default:
        console.log("Invalid operation. Please enter one of the following: +, -, *, /.");
        break;
}

