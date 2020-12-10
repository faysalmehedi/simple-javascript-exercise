// When base and height are known

const areaOfTriangle = function (base, height) {
    const area = (base * height) / 2;
    return `The area of the triangle is ${area}`
};

console.log(areaOfTriangle(4, 5));

/* 
When all sides are known; Herons' formula

s = (a+b+c)/2
area = √(s(s-a)*(s-b)*(s-c))
*/

const areaOfTriangle2 = function (side01, side02, side03 ) {
    const semi_perimeter = (side01 + side02 + side03) / 2;
    const area = Math.sqrt(semi_perimeter * (semi_perimeter - side01) * (semi_perimeter - side02) * (semi_perimeter - side03));
    return `The area of the triangle is ${area}`
};

console.log(areaOfTriangle2(3, 4, 5));