function hello(){
console.log("hello world")
}
hello();
// default argument
function add(a=4, b=0,c=0){
    return a+b+c;
}
console.log(add());
