//Inheritance

class User {
    constructor(username) {
        this.username=username 
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)    //Super keyword sees to which class you were extending and goes into that class and goes into that constructor and automatically sets the username and you can access it too  
        this.email=email
        this.password=password
    }

    addCourses(){
        console.log(`New course was added by ${this.username}`);
        
    }
}

const deviluser = new Teacher('chai','chai@gmail.com','123')
deviluser.addCourses();
deviluser.logMe();   //as teacher inherits the user so it can access the function logMe()

const masalaChai = new User('masalaChai')
masalaChai.logMe();

console.log(deviluser instanceof Teacher)
console.log(deviluser instanceof User)