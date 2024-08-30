//this only works in Objects not in functions

const user = {
  username: "Deepak",
  price: 999,

  welcomeMessege: function () {
    // console.log(`${this.username}, welcome to the Website`);
    // console.log(this);
  },
};
user.welcomeMessege();
user.username = "Deepa";
user.welcomeMessege();

// console.log(this);



//this with function 
// function coffee(){
//     console.log(this);

// }
// coffee()




// const coffee =function (){
//     let username = "Deepak"
//     console.log(username);
// }
// coffee()



// const coffee =()=>{
//     let username = "Deepak"
//     // console.log(this);
//     console.log(username);
// }
// coffee()


//Arrow Function Syntax
()=>{

}



// addTwoNumbers=(num1,num2)=>{
//     return num1+num2
// }
//            or

//implicit return
// addTwoNumbers=(num1,num2) => num1+num2
//               or                        
//if we wrap in curly braces then return keyword is necessary 
addTwoNumbers=(num1,num2) => (num1+num2)    //wrap in paranthesis Mainly used in (React)


console.log(addTwoNumbers(4,5));

