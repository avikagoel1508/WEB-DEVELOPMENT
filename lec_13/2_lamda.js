let person=()=>{
    console.log(this.name)
    console.log(this.age)
}
let s={
    name: "Ankit",
     age: 19
}
let s1={
    name:"Pooja",
    age: 21
}
person.call(s)
person.call(s1)

// person is inside the window , thus henever we will print name and age 
// it will only print what is mentioned inside the window object.........