//Funtions and Parameters

function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
    console.log("A");
    console.log("K");
}


// sayMyName();
 
// function add(number1,number2){     //()-contains parameters
//     console.log(number1+number2);
// }
// add(10,10);    //()- arguments 


function add2(number1,number2){     
    let result = number1+number2;
    return result;
    //or
    // return number1+number2
    console.log("This will not printed as it comes after return ");
    
}
const result = add2(10,10);    

// console.log("Result : ",result);



//Types 2 print the function Messege     //console and return
function loginUserNessage1(username){
    // console.log(`${username} just logged in !`);          //1
}
loginUserNessage1("Deepak")                  //1




function loginUserNessage2(username="Deep"){ //Deep will be default value if name is not passed in the argument
    if (!username) {                         //(username===undefined) or (!username)
        console.log("Please enter a Username");
        return;
        
    }
    return `${username} just logged in !`;                    
}
// console.log(loginUserNessage2("Deepak"))        






//---------------------Functions with Objects--------------------------


function calculateCartPrice(val1,val2,...num1){      //(...) - rest opereator
    return num1
}

// console.log(calculateCartPrice(500,600,700,800));


//how to pass the object to the function and how its used
const user={
    user_name:"Deepak",
    price:199
}

function Amazon(anyObject){
    console.log(`Username is ${anyObject.user_name} and Item Price is ${anyObject.price}`);
}
// Amazon(user)

Amazon({
    user_name:"Deep",
    price:599
})


const myNewArray=[100,200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}
 
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100,200,300,400,500]))




