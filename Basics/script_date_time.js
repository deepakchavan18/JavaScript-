//Date and time in JavaScript 



let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toUTCString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// console.log(typeof(myDate));

let mynewdate=new Date(2024 , 7, 27)   //In JS Month starts from 0-11  Eg.0=January
// console.log(mynewdate.toDateString())

let mynew1date=new Date(2024 , 7, 27 , 5 ,3)
// console.log(mynew1date.toLocaleString())

let mynew2date=new Date("2027-07-27")    //When we use DD-MM-YYYY Moths starts form 1
// console.log(mynew2date.toLocaleString())

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(mynew2date.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getHours());

console.log(`Todays Date is ${newDate.getDate()} and Month is ${newDate.getMonth()+1}`)

newDate.toLocaleString('default',{
    weekday:"long"
})
