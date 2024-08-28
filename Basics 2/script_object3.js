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



//------------------------New Concept------------------------


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

