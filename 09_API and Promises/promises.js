//Promise -> A Promise is an object representing the eventual completion or failure of an asynchronous operation. 


//Make promise in two Part
const promiseOne = new Promise(function(resolve,reject) { 
    //Do an async task
    //DB Calls, Cryptography, Network
    setTimeout(function(){
        console.log('Async Task is Completed - 1');
        resolve()
    },1000)
})

promiseOne.then(function(){             //.then connection is directly with resolve 
    console.log('Promise Consumed')
})                    



//Make Promise in Single Part
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task Completed - 2");    
        resolve()
    }, 1000);
}).then(function(){
    console.log('Async 2 Resolved')
})


//Promise 3
const PromiseThree = new Promise(function(resolve,request){
    setTimeout(() => {
        resolve({username:"Deepak",email:"www.deepakchavan18@gmail.com"})          //in resolve() parameter we can pass the data
    }, 1000);
})

PromiseThree.then(function(user){
    console.log(user);
    // console.log(user.username); 
})



//Promise - 4
const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username : "Devil",password:"123"})
        }else{
            reject("ERROR : Something Went Wrong")
        }
    }, 1000);
}) 

PromiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{                 //chaining is done to get the exact element 
    console.log(username)
}).catch(function(error){             //to catch the error 
    console.log(error)
}).finally(()=> {
    console.log("The Promise is Either Resolved Either Rejected ");
})



//Promise - 5
const PromiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username : "JavaScript",password:"123"})
        }else{
            reject("ERROR : JS Wennt Wrong ")
        }
    }, 1000);
})

//Different Way
async function consumePromiseFive() {
    const response = await PromiseFive
    console.log(response);
}

consumePromiseFive()