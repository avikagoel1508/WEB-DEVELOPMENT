function createAccount(name,college){
    let balance=0;
    function deposit(amt){
        balance+=amt;
    }
    function credit(amt){
        if(balance>=amt){
            balance-=amt;
        }
        else{
            throw new Error("Insufficient Balance")
        }
    }
    function checkbalance(){
        return balance;
    }
    function details(){
        console.log("-----------------")
        console.log("name",name)
        console.log("college", college)
        console.log("balance", balance)
        console.log("-----------------")
    }
    return{
        credit,
        deposit,
        checkbalance,
        details
    }
}
let tarunaccount=createAccount("Tarun", "Dtu");
let rhthymaccount=createAccount("Rhthym", "MSIT");
tarunaccount.deposit(1000);
tarunaccount.details();

rhthymaccount.details();
rhthymaccount.credit(1000);