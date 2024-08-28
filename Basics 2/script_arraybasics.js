const marvel_heros=["Thor","Ironman","Spiderman"]
const dc_heros=["Batman","Flash","Superman"]

//Concat
const all_heros=marvel_heros.concat(dc_heros);
// console.log(all_heros)


//Spread Type 
const all_new_heros=[...dc_heros,...marvel_heros]
// console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[8,[9]]];

const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);

//Check it iss array or not 
console.log(Array.isArray("Deepak"))

//To convert into Array
console.log(Array.from("Deepak"))


let score1=100;
let score2=200;
let score3=300;
let score4=400;
//Convert above numbers to Array
console.log(Array.of(score1,score2,score3,score4))

