function celciusToFahrenhit (celcius) {
    const fahrenhit = celcius * (9 / 5) + 32;
    return `${celcius}(°C) degree is equal to ${fahrenhit}(°F) degree.`;
}

console.log(celciusToFahrenhit(20));

function fahrenhitToCelcius (fahrenhit) {
    const celcius = (fahrenhit - 32) * (5 / 9);
    return `${fahrenhit}(°F) degree is equal to ${celcius}(°C) degree.`;
}

console.log(fahrenhitToCelcius(68));