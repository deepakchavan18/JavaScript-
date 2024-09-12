//Everything in JavaScript we use is ES6 version 

//Syntax of Class 
// class name {
//     constructor(parameters) {
        
//     }
// }



// class User {
//     constructor(username,email,password) {
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }

//     encryptPassword(){
//         return `Password -> ${this.password}@abc`
//     }

//     //To chaange the username into capital letters 
//     changeUsername(){
//         return `Username -> ${this.username.toUpperCase()}`
//     }
// }

// const deviluser = new User('devil123','devil@gmail.com','devil');

// console.log(deviluser.encryptPassword())
// console.log(deviluser.changeUsername())



//Behind the Scene (If the Class doesnt exist how we would have implmented it)
function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}
User.prototype.encryptPassword=function(){
    return `Password -> ${this.password}@abc`
}
User.prototype.changeUsername=function(){
    return `Username -> ${this.username.toUpperCase()}`
}

const user2 = new User('user8669','user@gmail.com','user');

console.log(user2.changeUsername())
console.log(user2.encryptPassword())
