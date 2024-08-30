//Objects

//Singleton
//AND 
//Objects Literals 

const mySymbol=Symbol ["key1"]

const new_object={
    name:"Deepak",
    "full name":"Deepak Chavan",
    [mySymbol]:"mykey",
    age:20,
    email:"www.deepakchavan18@gmail.com",
    isLoggedin:false,
    lastlogin:["Monday","Sunday"]
} 

// console.log(new_object.name);

// //To access the object components
// console.log(new_object.name);

// // Access the data which is defined in string
// console.log(new_object["full name"]);

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







//                         Objects in Java [ Part - 2 ]


//Singleton ->when its made using Constructor
// Object.create

//object literals
// const JsUser={}


// const tinderUser = new Object()    //singleton Object

const tinderUser={}                 ////Non-singleton Object

tinderUser.id="123abc"
tinderUser.name="Devil"
tinderUser.isLoggedIn=true

// console.log(tinderUser);

const regularUser = {
    email:"devil@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Deepak",
            lastname:"Chavan"
        }
    }
}
 
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={ 1:"a", 2:"b" }
const obj2={ 3:"c", 4:"d" }     

const obj3=obj1+obj2;  // X X X This is not an correct way X X X 
// console.log(obj3); 

const obj4=Object.assign({} ,obj1,obj2)   //Paraenthesis is optional   so here paranthesis is an traget ans remaining are source
// console.log(obj4); 

const obj5={...obj1,...obj2}//Spread
// console.log("Using Spread ",obj5); 



//Array of Objects {This like of data comes from database}

users =[
    {
        id:1,
        name:"Deepak"
    },
    {
        id:1,
        name:"Deepak"
    },
    {
        id:1,
        name:"Deepak"
    },
    {
        id:1,
        name:"Deepak"
    }
]

// console.log(users[1].name);
 
// console.log(tinderUser)
// console.log(Object.keys(tinderUser ));
// console.log(Object.values(tinderUser ));
// console.log(Object.entries(tinderUser ));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));   //To chek the Object has it or not (property)








//                         Objects in Java [ Part - 3 ]


const course={
    coursename:"Javascript",
    price:"1599",
    courseInstructor:"hitesh"
}


// console.log(course.courseInstructor);

// const {courseInstructor} = course     //to Extract value from object
// console.log(courseInstructor);



const {courseInstructor:instructor} = course    // rename 
// console.log(instructor);

        //or

const {courseInstructor:ci} = course            //rename
// console.log(ci);


// //React(Destructuring)

// const company=({company})=>{
//     console.log("Hello")
// }
// navbar(company="Deepak")


//ApI is in JSON {JSON is an JS Object notation}
// {
//     "name":"Deepak",
//     "coursename":"JS",
//     "price":"Free"
// }

