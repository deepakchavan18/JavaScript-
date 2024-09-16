//Getter and Setter - used too revoke the access of anything in the  program such as password
// Getters and setters are methods used in object-oriented programming (OOP) to access and modify the values of a class's attributes:
//   - Getters: Used to access the value of an attribute in a class.
//   - Setters: Used to set or modify the value of an attribute in a class. 
// Getters and setters are also known as accessors and mutators, respectively. They are commonly used to protect data, especially when creating classes

class User {
    constructor(email,password) {
        this.email=email;
        this.password=password;
    }

    get email(){
        return this._email+"@gmail.com";
    }

    set email(value){
        this._email = value ;
    }

    //getter
    get password() {
        return `${this._password}encrypted`
    }

    //setter
    set password(value) {
        this._password = value
    }
}

const deepak = new User('deepakchavan18','deepakC');

// console.log(deepak.password)
console.log(deepak.email)
