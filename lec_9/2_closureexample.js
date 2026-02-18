function createcounter(){
    let cnt=0;
    function counter(){
        cnt++
        return cnt;
    }
    return counter;
}
let c1=createcounter();
console.log(c1())
console.log(c1())
console.log(c1())
console.log(c1())
