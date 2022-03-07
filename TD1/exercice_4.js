/**** 4.1 ****/
function reverse(s) {
    var splited = s.split("");
    var reversed = splited.reverse();
    return reversed.join("");
}

console.log(reverse("hello world !"));


/**** 4.2 ****/
function replace(str) {
    var splited = str.split("");
    return splited.map(x => (String.fromCharCode(x.charCodeAt(0) + 1))).join("");
}

console.log(replace("Je suis ton père"));