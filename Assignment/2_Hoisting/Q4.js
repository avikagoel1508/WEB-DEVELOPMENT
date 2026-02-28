var y = 50;
function first() {
console.log(y);
var y = 100;
function second() {
console.log(y);
var y = 150;
console.log(y);
}
second();
console.log(y);
}
first();
console.log(y);