//Object Literal 
const user = {
    username : "Deepak",
    loggedInCount: 8,
    isLoggedIn: true,

    getUserDetails: function(){
        // console.log("Got User Details from Database ");
        // console.log(`USername: ${this.username}`)
        // console.log(this);
        
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());





//Constructor
function User(username,loggedInCount,isLoggedIn){
    this.username = username
    this.loggedInCount = loggedInCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function (){
        console.log(`Welcome ${this.username}`);
    }

    return this         //Implicitly defined if not written
}


//How (new) keyword works
//step 1 -> when we use new keyword an empty object is being created known as instance 
//step 2 -> Constructor function is being called due to new keyword
//step 3 -> due to this keyword all the arguments get injected
//step 4 -> The this keyword points to the newly created object, and the properties and methods defined in the constructor function are added to this object.
//step 5 -> The constructor function returns the newly created object, which is then assigned to the variable on the left-hand side of the assignment operator.
const userOne = new User("Deepak",10,true)
const userTwo = new User("Devil",12,false)     //This Overwrites the data of userOne
console.log(userOne.constructor);          //Constructor is Reference of its own
console.log(userTwo);

