/****  3.1 ****/
function triple(a) {
    return 3 * a;
}

console.log(triple(10));

/****  3.3 ****/
function sum(a, b, c, d) {
    var add = (n1, n2) => {
        return n1 + n2;
    }

    return add(a, b) + add(c, d);
}

console.log(sum(1, 2, 10, 11));

/****  3.4 ****/
function pow(b, n) {
    return b ** n;
}

var powpow = (b, n) => {
    return b ** n;
}

console.log(pow(2, 2));
console.log(powpow(3, 3));

/****  3.5 ****/
function qu3_5(a, b, c) {
    return a * c(b);
}

console.log(qu3_5(10, 5, x => { return x - 1 }));