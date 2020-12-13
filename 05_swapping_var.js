function swapVar (a, b) {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}

console.log(swapVar(44, 43));

function swapVarDes (a, b) {
    return [a, b] = [b, a];

}

console.log(swapVarDes(99, 300));

function swapVarArthimatic(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;

    return [a, b];
}

console.log(swapVarDes('World', 'Hello'));

