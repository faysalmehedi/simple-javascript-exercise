function randomNumberGenerator (low, high) {
    const random = Math.random() * (high - low) + low;
    return `Random value between ${low} and ${high} is ${Math.floor(random)}.`;
}

console.log(randomNumberGenerator(10, 90));