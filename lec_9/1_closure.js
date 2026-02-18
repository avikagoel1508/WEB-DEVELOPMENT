function genfun(){
    let x=10;
    function fun(){
        x++;
        console.log(x)
    }
    return fun;
}
let f=genfun();
f();
f();
let f1=genfun();
f1();
f1();
