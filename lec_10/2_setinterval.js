// setInterval(function(){
//     console.log("hii")
// },2000);
// console.log("hello world")

let id=setInterval(function(){        // to set the interval ki itne time baad wapis yhi output aana chahiye
    console.log("hi");
},1000);
setTimeout(()=>{           // to stop the interval
    clearInterval(id);
},5000)

 //ek id pass hoti h clear interval mei jo itne time baad(5000) stop kr degi output ko
 