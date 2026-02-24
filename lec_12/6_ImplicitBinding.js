let newstudent={
    name:'Ankit',
    age: 19,
    city: 'Delhi',
    printDetails: function(){
        console.log("Name", this.name)
        console.log("Age", this.age)
        console.log("City", this.city)
    }
}
newstudent.printDetails();
// dot operator se implicit binding 