
var physics = Number(prompt("Enter the Physics grade:"));
var chemistry = Number(prompt("Enter the Chemistry grade:"));
var biology = Number(prompt("Enter the Biology grade:"));
var mathematics = Number(prompt("Enter the Mathematics grade:"));
var computer = Number(prompt("Enter the Computer grade:"));

var total = physics + chemistry + biology + mathematics + computer;

var percentage = (total / 500) * 100;

var grade;
if (percentage >= 90) {
    grade = "A";
} else if (percentage >= 80) {
    grade = "B";
} else if (percentage >= 70) {
    grade = "C";
} else if (percentage >= 60) {
    grade = "D";
} else if (percentage >= 40) {
    grade = "E";
} else {
    grade = "F";
}

console.log("Total: " + total);
console.log("Percentage: " + percentage + "%");
console.log("Grade: " + grade);
