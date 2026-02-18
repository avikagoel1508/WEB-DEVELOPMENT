// setTimeout(function(){
//     console.log("Done")
// },5000);
// console.log("Hello")
setTimeout(function hello(){
     console.log("Done")
 },3000);
setTimeout(function hello(){
     console.log("ho gya")
 },2500);

 console.log("hello")
 function waitAsec(){
    let t=new Date().getTime();
    while (new Date().getTime()-t<1000) {
        
    }

 }
 function waitNsec(n){
    for(let i=9; i<n; i++) waitAsec();
 }
 waitNsec(5);

 