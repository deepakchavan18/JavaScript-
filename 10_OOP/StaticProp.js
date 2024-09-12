//Static Properties 

class User {
    constructor(username) {
        this.username = username 
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }

    static createId(){       //There can be a situation where you dont want to give the access of the function createId to all those object who are instanciate of the Class 
        return `123`
    }
}

const deepak = new User("Deepak")
// console.log(deepak.createId())//this is not possible

