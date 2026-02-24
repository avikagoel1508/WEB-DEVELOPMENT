function printstudent(){
        console.log("Name", this.name)
        console.log("Age", this.age)
        console.log("City", this.city)
    }
    let newstudent={
    name:'Ankit',
    age: 19,
    city: 'Delhi',
    }
    let newstudent1={
    name:'Shaurya',
    age: 18,
    city: 'Mumbai',
    }

    // Three function are there for explicit binding
    // 1.call
    // 2.apply
    // 3.bind
    
    //printstudent ke ander this keyword will point to newstudent
    printstudent.call(newstudent)

    //printstudent ke ander this keyword will point to newstudent1
    printstudent.call(newstudent1)