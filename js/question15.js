
var month = parseInt(prompt("أدخل رقم الشهر (من 1 إلى 12):"));
var days;

switch (month) {
    case 1: 
    case 3: 
    case 5:
    case 7: 
    case 8: 
    case 10: 
    case 12: 
        days = 31;
        break;
    case 4: 
    case 6: 
    case 9: 
    case 11: 
        days = 30;
        break;
    case 2: 
        days=28;
        break;
    default:
        console.log("رقم الشهر غير صالح. يرجى إدخال رقم بين 1 و 12.");
        break;
}
if (days) {
    console.log("عدد الأيام في الشهر " + month + " هو: " + days);
}
