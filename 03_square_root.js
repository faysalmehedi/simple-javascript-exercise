
// Method 01: square input to 0.5
function squareRoot (input01) {
    if (input01 < 0) return "Negative Number";

    return `The square root of ${input01} is ${input01 ** 0.5}`
}

console.log(squareRoot(-25));
console.log(mathSqrt(21));

// Method 02: using Math.sqrt() function

function mathSqrt(input01) {
    if (input01 < 0) return "Negative Number";

    return `The square root of ${input01} is ${Math.sqrt(input01)}`
}


console.log(mathSqrt(-49));
console.log(mathSqrt(44));


