var a = 5;
function outer() {
function inner() {
console.log(a);
var a = 10;
}
inner();
console.log(a);
var a = 15;
console.log(a);
}
outer();