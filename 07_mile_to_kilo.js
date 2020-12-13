function kiloToMile (kilometer) {
    const factor = 0.621371;
    const miles = kilometer * factor;
    return (`${kilometer} kilometer/s is equal to ${miles} miles.`);
}

console.log(kiloToMile(10));