//Global and Local Scope  


let a =300;

if (true) {
    let a=10;
    const b=20;
    var c=30;
    // console.log("Inner : "),a;
    
}

// for (let i = 0; i <  array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);
 





//Nested Scope 

function one(){
    const username="Deepak"

    function two(){
        const website="deepakchavan18@gmail.com"
        // console.log(username);
    }
    // console.log(website);

    two();

}

one();




if(true){
    const username="Deepak"
    if(username==="Deepak"){
        const website="devil"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);






// ----------------- Interesting --------------------

//2 Types to how functions are made 


function addOne(num){
    return num+1;         //It just return s not prints
}
addOne(4)           //Can be used before declaration




const addTwo=function(num){
    return num+2
}
addTwo(4)           //Cannot be used before declaration







