// //Prototype
// let myName = "Deepak         "
// let myName = "Chavan         "

// console.log(myName.truelength);


let myHeros =['thor','spiderman','batman']

let heroPower = {
    thor:"hammer",
    spiderman:"sling",
    
    getSpiderPower: function(){
        console.log(`SpiderMan power is ${this.spiderman}`);
    }
}

Object.prototype.deepak = function(){
    console.log('Deepak is present in all Objects ');
    
}

Array.prototype.heydeepak= function(){
    console.log("Deepak says Hello");
}

// heroPower.deepak()
// myHeros.deepak()
// myHeros.heydeepak()




//Inheritance   may be old method

const user ={
    name:"Deepak",
    email:"deepak@gmail.com"
}

const teacher={
    makeVideo : true,
}

const teachingSupport = {
    isAvailable : false
}

const techSuppport = {
    makeAssignment : 'JS Assignment',
    fullTime : true,
    __proto__: teachingSupport
}

teacher.__proto__ = user    

//Modern Syntax
Object.setPrototypeOf(teachingSupport,teacher)

let anotherUsername = "Deepak    "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`)
}

anotherUsername.trueLength()
"Shantanu ".trueLength()
"hello".trueLength()