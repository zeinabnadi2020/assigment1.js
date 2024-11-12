
var letter = prompt("Enter a letter:");

letter = letter.toLowerCase();

if (letter.length === 1 && letter.match(/[a-z]/i)) {
    
    switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log(letter + " is a vowel.");
            break;
        default:
            console.log(letter + " is a consonant.");
            break;
    }
} else {
    console.log("Please enter a valid alphabet letter.");
}

