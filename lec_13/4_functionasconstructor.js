function person(name ,age){
    this.name=name;
    this.age=age;
}
person.prototype.printDetails=function(){
console.log("Name : ", this.name)
console.log("Age : ", this.age)
}
let p=new person("Ankit", 19);
console.log(p)