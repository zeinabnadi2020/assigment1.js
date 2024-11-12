
var char = prompt("char");


char = char.toLowerCase();


if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log("حرف متحرك (Vowel)");
} else {
    console.log("حرف ساكن (Consonant)");
}
