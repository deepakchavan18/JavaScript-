const coding = ["JS","CSS","HTML","C++"]


//Simple Function
coding.forEach(function(lang){             //it is a Parameter that brings eg lang , i 
    // console.log(lang);
})



//Arrow Function 
coding.forEach((item)=>{
    // console.log(item)
})




//Diffrenet Method
function printme(lang){
    console.log(lang);
}

// coding.forEach(printme)        //just give reference dont execute here printme()-X 



//What parameter does it have 
coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})





//Array of Object   {IMP}
const myCoding=[
    {
        languageName:"Javascript",
        languageFileName:"JS"
    },
    {
        languageName:"Hypertext Markup Lanaguage",
        languageFileName:"HTML"
    },
    {
        languageName:"Cascading Style Sheet",
        languageFileName:"CSS"
    }
]

myCoding.forEach((code)=>{
    // console.log(code.languageName);
    console.log(`Full form of ${code.languageFileName} is ${code.languageName}`);
})















