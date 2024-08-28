const mySymbol=Symbol ["key1"]

const new_object={
    name:"Deepak",
    "fullname":"Deepak Chavan",
    [mySymbol]:"mykey",
    age:20,
    email:"www.deepakchavan18@gmail.com",
    isLoggedin:false,
    lastlogin:["Monday","Sunday"]
} 

// console.log(new_object.name);

// // Access the data which is defined in string
// console.log(new_object["fullname"]);

// //Access Symbol
// console.log(new_object[mySymbol]);

// //change data in object
// new_object.email="deepakchavan@gmail.com"

// //Lock values in Object so no can change it
// Object.freeze(new_object)

// //change data in object
// new_object.email="deepakchavan20@gmail.com" //Email has not changed because Object is Freezed

// //Access values of Object
// console.log(new_object);

new_object.greeting = function(){
    console.log("Hello");
}
new_object.greetingTwo = function(){
    console.log(`Hello ${this["fullname"]} your age is ${this.age}`);
}


console.log(new_object.greeting())
console.log(new_object.greetingTwo())
