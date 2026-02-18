function download(cb){
    console.log("download starts")
    setTimeout(()=>{
        console.log("download ends")
        cb(uploading);
    },2000)
    
}
function compression(cbb){
    console.log("comp starts")
    setTimeout(()=>{
        console.log("comp ends")
        cbb();
    },2000)
}
function uploading(){
    console.log("upload starts")
    setTimeout(()=>{
        console.log("upload ends")
    },2000)
}
download(compression);
