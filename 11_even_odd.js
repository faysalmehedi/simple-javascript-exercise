function checkEvenOdd (number) {
    // if (number % 2 === 0) {
    //     return "Even Number.";
    // } else {
    //     return "Odd Number.";
    // }
    return (number % 2 === 0 
        ? "Even Number"
        : "Odd Number")
}

console.log(checkEvenOdd(66));
console.log(checkEvenOdd(11));
console.log(checkEvenOdd(0));
console.log(checkEvenOdd(-23));
console.log(checkEvenOdd(-2));