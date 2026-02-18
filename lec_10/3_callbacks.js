function khanabanana(){
    console.log("khana banana start")
    setTimeout(()=>{
        console.log("khana ban gya")
    },2000);
}
function sabzilaana(cb){
    console.log("sabzi laana")
    setTimeout(()=>{
        console.log("sabzi aa gyi")
        cb();             // iske callback ko chalana hota h
    },2000);

}
sabzilaana(khanabanana); // this is call back function sabzi laana function ke baad khana banana function execute ho ga