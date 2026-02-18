function genfun(){
    let x=10;
    function fun(){
        x++;
function innerfun(){
    x++;
    console.log(x);
}
return innerfun;
    }
    return fun;
}
let newfun=genfun()
let fun1=newfun()
fun1()
fun1()
fun1()
let fun2=newfun()
fun2()
fun2()
fun2()

fun1()
fun1()
// newfun mei fun aa gya
// fun1 mei innerfun aa gya
//fun2 continue hoga
// 12 13 14 16 17 18 19 20 
