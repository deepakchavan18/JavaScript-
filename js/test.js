//                                       Array

const myArr=new Array(0,1,2,3,4,5,6)

//Array Methods

// myArr.push(10)
// myArr.push(99)
// myArr.pop()

// myArr.unshift(4)   //adds an element to the start of the array
// myArr.shift()        //removes an element which was being added theough unshift

// console.log(myArr.includes(1));

// console.log(myArr.indexOf(1))

// const newArray=myArr.join();
// console.log(newArray)

// console.log(myArr);


//  -----------Slice and Splice---------

// console.log("A",myArr);/

const mya1= myArr.slice(1,3)
// console.log("Slice -> ",mya1);

// console.log("B",myArr);

const mya2= myArr.splice(1,3)
// console.log("C",myArr);
// console.log("Splice -> ",mya2);





//                      ---------Array 2 ---------------

// In github heores section 

const marvel_heros=["Thor","Ironman","Spiderman"]
const dc_heros=["Batman","Flash","Superman"]

//Types to Add Arrays { Concat and Spread }

//Concat
all_heroes=marvel_heros.concat(dc_heros);
// console.log(all_heroes[3]);

//Spread
const all_new_heroes=[...dc_heros,...marvel_heros]
// console.log(all_new_heroes);


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)   //Removes all the subarray of the subarray and many more of the array
// console.log(real_another_array);


//Check it iss array or not 
// console.log(Array.isArray("Deepak"));
// console.log(Array.isArray(real_another_array));

//To convert into Array
// console.log(Array.from("Deepak"))

let score1=100
let score2=200 
let score3=300
let score4=400
let score_array=Array.of(score1,score2,score3,score4)

// console.log(score_array);
// console.log(typeof(score_array))




 





//                                Objects in Java [ Part - 1 ]

//Singleton
//AND 
//Objects Literals 



//Objects Literals 


const mySymbol=Symbol("key-1")

const JsUser={
    name:"Deepak",
    "full name":"Deepak Chavan",
    [mySymbol]:"mykey-1",
    age:21,
    location:"Nashik",
    email:"www.deepakchavan18@gmail.com",
    isLoggedIn:true,
    lastLoggedIn:["Monday","Tuesday"]
}

// //To access the object components
// console.log(JsUser.name);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySymbol]);

JsUser.email="deepakchavan18@gmail.com"   //Changed Email
// console.log(JsUser.email);


//Freeze the Object 
// Object.freeze(JsUser)
// JsUser.name="Deepa"    //Name will not Change as it is freezed
// console.log(JsUser.name);

JsUser.greeting=function(){
    // console.log("Hello this is Deepak Chavan");
}

JsUser.greeting2=function(){
    // console.log(`Hello this is ${this["full name"]} and my age is ${this.age}`);
    // console.log(`Hello this is ${this.name}`);
}


// console.log(JsUser.greeting());
// console.log(JsUser.greeting2());










//                         Objects in Java [ Part - 2 ]


//Singleton


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

// const {courseInstructor} = course
// console.log(courseInstructor);

        //or

const {courseInstructor:ci} = course
console.log(ci);


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








