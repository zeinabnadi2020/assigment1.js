let subject1 = parseInt(prompt("Enter the first subject mark:"));
let subject2 = parseInt(prompt("Enter the second subject mark:"));
let subject3 = parseInt(prompt("Enter the third subject mark:"));
let subject4 = parseInt(prompt("Enter the fourth subject mark:"));
let subject5 = parseInt(prompt("Enter the fifth subject mark:"));

let total = subject1 + subject2 + subject3 + subject4 + subject5;

let average = total / 5;

let percentage = (total / 500) * 100;

console.log("Total: " + total);
console.log("Average: " + average);
console.log("Percentage: " + percentage + "%");

