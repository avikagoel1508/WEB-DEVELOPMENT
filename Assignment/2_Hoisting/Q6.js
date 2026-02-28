var val = 7;
function fun1() {
console.log(val);
function fun2() {
var val = 14;
console.log(val);
function fun3() {
console.log(val);
}
fun3();
}
var val = 21;
fun2();
console.log(val);
}
fun1();