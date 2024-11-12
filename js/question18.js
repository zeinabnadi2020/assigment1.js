
var number = Number (prompt("أدخل عددًا للتحقق إذا كان زوجيًا أم فرديًا:"));


switch (number % 2) {
    case 0:
        console.log(number + " هو عدد زوجي.");
        break;
    case 1:
        console.log(number + " هو عدد فردي.");
        break;
    default:
        console.log("حدث خطأ غير متوقع.");
        break;
}
