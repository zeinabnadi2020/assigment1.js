



var month = parseInt(prompt("أدخل رقم الشهر (من 1 إلى 12):"));



var days;


if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    days = 31; 
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    days = 30;  
} else if (month === 2) {
 
} else {
    console.log("رقم الشهر غير صالح.");
}

if (days) {
    console.log("days" + month  + days);
}
