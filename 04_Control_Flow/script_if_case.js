// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==



const score = 200;
if (score>=100){
    let power="Fly"   //dont use var (use let or const instead)
    // console.log(`Power is -> ${power}`);
}
// console.log(`Power is -> ${power}`);


const balance=1000;

// if (balance<500) {
//     console.log("less than 500");
// }
// else if(balance<=750){
//         console.log("less than 700");
// }
// else if(balance<=900){
//     console.log("less than 700");
// }
// else{
//     console.log("less than 1200");
// }




const userLoggedIn=true;
const debitCard = true;
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    // console.log("Allowed for Shopping"); 
    
}

if (loggedInFromEmail || loggedInFromGoogle)
{
    console.log("User is allowed to login ");
    
}