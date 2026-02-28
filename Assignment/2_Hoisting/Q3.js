var x = 10;
function outer() {
console.log(x);
var x = 20;
function inner() {
console.log(x);
var x = 30;
console.log(x);
}
inner();
console.log(x);
}
outer();