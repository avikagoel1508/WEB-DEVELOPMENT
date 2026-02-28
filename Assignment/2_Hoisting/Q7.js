var global = 1;
function outer() {
var global = 2;
function inner1() {
console.log(global);       //undefined
var global = 3;
console.log(global);        //3
}
function inner2() {
console.log(global);       //2
}
inner1();
inner2();
console.log(global);   //2
}
outer();