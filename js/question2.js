
var userInput = prompt("أدخل رقم:")

var number = Number(userInput);


if (number % 3 === 0 && number % 4 === 0) {
    console.log("yes");
} else {
    console.log("No");
}
