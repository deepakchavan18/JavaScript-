// For of    // can be used for anything  (String , Object , Arrays ,etc)

// ["","",""]  // Array iof String 
// [{},{},{}]  //Array of Objects


const arr=[1,2,3,4,5,6,7,8]
for (const num of arr) {
    // console.log(num);
}

const greetings="Hello Deepak here"
for (const greet of greetings) {
    // console.log(greet);
}



//Map     //Maps are iterable
const map =new Map()
map.set('IN','India')
map.set('USA','United States')
map.set('EUR','Europe')
// console.log(map); 

for(const[key,value] of map){
    // console.log(key,':-',value);
}



//Objects are not Iterable there are other ways to do so
const my_obj={
    'Game1':'NFS',
    'Game2':'GTA',
    'Game3':'PUBG'
}

// for (const [key,value] of my_obj) {
//     console.log(my_obj);
// }
