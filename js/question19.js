
let number = parseFloat(prompt("Enter a number to check if it is positive, negative, or zero:"));


switch (true) {
    case (number > 0):
        console.log(number + " is a positive number.");
        break;
    case (number < 0):
        console.log(number + " is a negative number.");
        break;
    case (number === 0):
        console.log(number + " is zero.");
        break;
    default:
        console.log("An unexpected error occurred.");
        break;
}
