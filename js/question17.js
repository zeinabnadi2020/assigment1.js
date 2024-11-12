
var num1 = Number(prompt("num1"));
var num2 = Number(prompt("num2"));


switch (true) {
    case (num1 > num2):
        console.log(num1 + " هو العدد الأكبر.");
        break;
    case (num2 > num1):
        console.log(num2 + " هو العدد الأكبر.");
        break;
    case (num1 === num2):
        console.log("العددين متساويين.");
        break;
    default:
        console.log("حدث خطأ.");
        break;
}
