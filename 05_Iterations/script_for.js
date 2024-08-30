//For


for (let i = 0; i < 10; i++) {
    const name = "Deepak"; 
    // console.log(`${i}. Hello My name is : ${name}`);
}




//for using if 
for (let i = 0; i<=10; i++) {
  const element= i;
  if (element == i) {
    // console.log(`Number = ${element}`);
  }
  // console.log(element)
}




//Nested for
 
for (let i = 1; i <= 10; i++) {
  // console.log(`Outer Loop ${i}`);

  for (let j = 1; j <= 10; j++) {
  // console.log(`Inner Loop ${j} and inner Loop ${i}`);
  // console.log( i +`*` + j + ' = ' + i*j );
  // console.log(`${i} * ${j} = ${i*j}`);  
  }
}

  


//loop on array
let myArray = ["flash", "batman" , "superman" ,"ironman"]

for(i=0;i<myArray.length;i++){
  const element = myArray[i]
  // console.log(element);
  
}



//break and continue


//break
for (let index = 1; index <= 20 ; index++) {
if (index==5) {
    // console.log("Detected 5");
    break;         //To break the Control Flow
  }
  // console.log(`Value of i is -> ${index}`);
  
}



//Continue 
for (let index = 1; index <= 20 ; index++) {
if (index==5) {
    console.log("Detected 5");
    continue         //terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.
  }
  console.log(`Value of i is -> ${index}`);
  
}