const userEmail = "www.deepakchavan18@gmail.com";

if (userEmail) {
    // console.log("Got user Email");
}else{
    // console.log("Dont have an Email");
}


//Falsy Value

// false , 0 , -0 , BIgInt On , NaN , undefined , ""



//truthy value 

//  "0" , 'false' , " " , [] , {} , function(){} , 


const emptyObj={}

if(Object.keys(emptyObj).length === 0){
    // console.log("Object is Empty");    
}



// Nullish Coalescing operator (??) : null undefined

let val1;
//val1= 5 ?? 10;
// val1 = null ?? 10
// var1 = undefined ?? 55;
var1 = null ?? 10 ?? 20

// console.log(val1);



//Ternary Operator 

// condition  ?  true : false

const iceTeaPrice = 100;

iceTeaPrice >=80 ? console.log("Less than 80 ") : console.log("Greater than 80");





const age=21;

age<=18 ? console.log("Not Eligible To Vote"):console.log("Eligible To Vote");


