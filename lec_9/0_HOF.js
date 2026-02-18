function fun(x){
    x();
}
function hello(){
    console.log("hello world")
}
fun(hello);  // function is passed

//.........................................................................................
function genfun(){
function world(){
    console.log("hii")
}
return world;
// return world()  output: x is not a function bcoz function is not returning anything therefore x is undefined and hence is not called
let x=genfun();
x();
}