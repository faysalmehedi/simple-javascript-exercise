
function isPrime(value) {
    if(value < 2) {
        return "Prime factors are those numbers with only two factors: 1 and themselves, and because of this, the numbers 0 and 1 cannot be prime numbers."
    } else {
        for (let i=2; i < (Math.floor(value / 2)); i ++ ) {
            if(value % i === 0) {
                return `${value} is a NOT PRIME number; ${i} times ${value / i} is ${value}`;
            }
        }

        return `${value} is PRIME NUMBER!`
    }
}

console.log(isPrime(-12));
console.log(isPrime(0));
console.log(isPrime(12));
console.log(isPrime(11));
console.log(isPrime(127));
console.log(isPrime(121));
console.log(isPrime(128737647));