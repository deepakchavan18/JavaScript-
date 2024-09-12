//call() -> To hold the reference  , With the call() method, you can write a method that can be used on different objects.

function setUsername(username){
    //Complex Db Calls 
    this.username=username     
    console.log("Called");
}

function createUser(username,email,password){
    setUsername.call(this, username)   //this is reference of the function so to call the function user .call method  here the function passes its own this 

    this.email=email
    this.password=password
}

const deepak = new createUser("Deepak",'deepal@gmail.com','123')
console.log(deepak);
