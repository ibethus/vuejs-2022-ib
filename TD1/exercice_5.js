/**** 5.1 ****/
var arr = [{ a: 1, b: 2 }, { a: 2, b: 4 }, { a: 9, b: 1 }, { a: 19, b: 29 }, { a: 187, b: 4 }];

function sol1(arr) {
    return arr.map(x => x.b);
}

function sol2(arr) {
    var newArray = new Array();
    arr.forEach(e => {
        newArray.push(e.b)
    });
    return newArray;
}

console.log(sol1(arr));
console.log(sol2(arr));

/**** 5.2 ****/
var arr = [{ a: 1, b: 2 }, { a: 2, b: 4 }, { a: 9, b: 1 }, { a: 19, b: 29 }, { a: 187, b: 4 }];

function filSup3(arr) {
    return arr.filter(x => x.a > 3);
}

console.log(filSup3(arr));

/**** 5.3 ****/
var arr = ["Luke Skywalker", "Maître Yoda", "R2D2", "Padmé Amidala", "Anakin Skywalker", "Obi-Wan Kenobi"];

function srawRats(arr) {
    return arr.reduce((prev, curr) => `${prev} ${curr}`);
}
console.log(srawRats(arr));

/**** 5.4 ****/
function noSkywalker(arr) {
    var noSky = arr.filter(x => !x.includes("Skywalker"));
    return srawRats(noSky);
}
console.log(noSkywalker(arr));

/**** 5.5 ****/
var countLetters = function(string) {
    var strMap = new Map();
    var filtered = string.split("").filter(s => s !== ' ');
    filtered.forEach(x => {
        if (strMap.has(x)) {
            strMap.set(x, strMap.get(x) + 1);
        } else {
            strMap.set(x, 1);
        }
    })
    return strMap;
};

console.log(countLetters("meurs, pourriture communiste !"));