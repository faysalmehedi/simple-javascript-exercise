function checkPositiveNegativeZero (number) {
    if (number === 0) {
        return "Zero";
    } else if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    }
}

console.log(checkPositiveNegativeZero(12));
console.log(checkPositiveNegativeZero(0));
console.log(checkPositiveNegativeZero(-1));