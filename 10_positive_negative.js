function checkPositiveNegativeZero (number) {
    if (number === 0) {
        return "Zero";
    } else if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    }

    // nested ternary operator
    
    // return (
    //     number === 0
    //         ? "zero"
    //         : (number > 0 
    //             ? "Positive"
    //             : "Negative"
    //             )
    // )
}

console.log(checkPositiveNegativeZero(12));
console.log(checkPositiveNegativeZero(0));
console.log(checkPositiveNegativeZero(-1));